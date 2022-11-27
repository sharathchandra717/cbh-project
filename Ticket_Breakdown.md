# Ticket Breakdown

We are a staffing company whose primary purpose is to book Agents at Shifts posted by Facilities on our platform. We're working on a new feature which will generate reports for our client Facilities containing info on how many hours each Agent worked in a given quarter by summing up every Shift they worked. Currently, this is how the process works:

- Data is saved in the database in the Facilities, Agents, and Shifts tables
- A function `getShiftsByFacility` is called with the Facility's id, returning all Shifts worked that quarter, including some metadata about the Agent assigned to each
- A function `generateReport` is then called with the list of Shifts. It converts them into a PDF which can be submitted by the Facility for compliance.

## You've been asked to work on a ticket. It reads:

**Currently, the id of each Agent on the reports we generate is their internal database id. We'd like to add the ability for Facilities to save their own custom ids for each Agent they work with and use that id when generating reports for them.**

Based on the information given, break this ticket down into 2-5 individual tickets to perform. Provide as much detail for each ticket as you can, including acceptance criteria, time/effort estimates, and implementation details. Feel free to make informed guesses about any unknown details - you can't guess "wrong".

You will be graded on the level of detail in each ticket, the clarity of the execution plan within and between tickets, and the intelligibility of your language. You don't need to be a native English speaker, but please proof-read your work.

## Your Breakdown Here

```
Ticket 1:

User story:
As a Developer.
I want to create a database if doesn't exists and also create schemas for Facilities, Agents, and Shifts tables.
So that I can access and perform CRUD operations.

Acceptance Criteria:
Given the database
When I open it
Then tables Facilities, Agents, and Shifts are present.

Story points: 3             Time estimate: 3hrs
```

```
Ticket 2:

User story:
As a Developer.
I want to create a new Id field in database.
So that I can add data to it.

Acceptance Criteria:
Given the database
When I open it
Then tables Facilities, Agents, and Shifts are present with custom Id field.


Story points: 1             Time estimate: 0.5hrs
```

```
Ticket 3:

User story:
As a Developer.
I want to create UI for adding custom ID.
So that I create/update ID.

Acceptance Criteria:
Given the UI page
When I open it
Then I could able to add/change Id.


Story points: 1             Time estimate: 1.5hrs
```

```
Ticket 4:

User story:
As a Developer.
I want to create a backend API for adding custom ID.
So that I create/update ID.

Acceptance Criteria:
Given the API
When I request it with the custom id
Then I could able to add/change Id in database.


Story points: 2             Time estimate: 2hrs
```

All the time estimates includes test cases time as well. Followed Scrum points system for story points.
