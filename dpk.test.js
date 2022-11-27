const { deterministicPartitionKey } = require("./dpk");

describe("deterministicPartitionKey", () => {
  it("Returns the literal '0' when given no input", () => {
    const trivialKey = deterministicPartitionKey();
    expect(trivialKey).toBe("0");
  });

  it("Returns a string '12345' when given a object with partitionKey as input", () => {
    const trivialKey = deterministicPartitionKey({
      partitionKey: 12345,
    });
    expect(trivialKey).toBe("12345");
  });

  it("Returns a particular key when 12345 is passed as input ", () => {
    const trivialKey = deterministicPartitionKey(12345);
    expect(trivialKey).toBe(
      "0a2a1719bf3ce682afdbedf3b23857818d526efbe7fcb372b31347c26239a0f916c398b7ad8dd0ee76e8e388604d0b0f925d5e913ad2d3165b9b35b3844cd5e6"
    );
    expect(trivialKey.length).toBe(128);
  });

  it("Returns a particular key for given input with length greater that 256", () => {
    const trivialKey = deterministicPartitionKey({
      partitionKey:
        "0a2a1719bf3ce682afdbedf3b23857818d526efbe7fcb372b31347c26239a0f916c398b7ad8dd0ee76e8e388604d0b0f925d5e913ad2d3165b9b35b3844cd5e60a2a1719bf3ce682afdbedf3b23857818d526efbe7fcb372b31347c26239a0f916c398b7ad8dd0ee76e8e388604d0b0f925d5e913ad2d3165b9b35b3844cd5e6lihai",
    });
    expect(trivialKey).toBe(
      "dfc680b30ad19e62e8c80c780578b36394442f03a716c514570f08edd884c978f4a9aa63b9120f9edcaeb7fa92f689768c0c7f6d98f281eb98f88dad5134d632"
    );
    expect(trivialKey.length).toBe(128);
  });
});
