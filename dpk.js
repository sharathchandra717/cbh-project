const crypto = require("crypto");

exports.deterministicPartitionKey = (eventData) => {
  // renamed event to eventData
  const TRIVIAL_PARTITION_KEY = "0";
  const MAX_PARTITION_KEY_LENGTH = 256;
  let candidateKey; // renamed candidate to candidateKey

  if (eventData) {
    if (eventData.partitionKey) {
      candidateKey = eventData.partitionKey;
    } else {
      candidateKey = crypto
        .createHash("sha3-512")
        .update(JSON.stringify(eventData))
        .digest("hex");
    }
  }

  if (candidateKey) {
    if (typeof candidateKey !== "string") {
      candidateKey = JSON.stringify(candidateKey);
    }
  } else {
    candidateKey = TRIVIAL_PARTITION_KEY;
  }
  if (candidateKey.length > MAX_PARTITION_KEY_LENGTH) {
    candidateKey = crypto
      .createHash("sha3-512")
      .update(candidateKey)
      .digest("hex");
  }
  return candidateKey;
};
