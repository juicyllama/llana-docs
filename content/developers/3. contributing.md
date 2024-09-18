# Contributing

We really appreciate your interest in contributing to our projects. Our open source tools are used in many commercial projects and so it's important you follow the contributing guidelines closely.

## Help Wanted

We welcome Developers, Project Managers, QA'ers, Documentors, Marketers and anyone else who wants to contribute to our open source tooling. 

::alert{type="info"}
If you have not contributed to an open soure project before, [checkout this helpful guide](https://opensource.guide/how-to-contribute/).
::

### Open Source Development

If you are looking to work on existing tickets, then follow this flow:

1. Checkout the respositories issues tab for outstanding work.
2. Once you have identified an issue you would like to work on, follow the [contributing flow](#contributing-flow) below.

### Specific Features

If you have specific features you would like to add to a tool, follow this flow:

1. Discuss the change you wish to make via the repos discussions tab.<br><br>
2. Assuming the discussion results in a development issue, once will be created and linked to the discussion. <br><br>
3. Once the ticket is fully scoped out, follow the [contributing flow](#contributing-flow) below.

### Contributing Flow 

1. Install the framework locally by first [folking the framework](https://docs.github.com/en/get-started/quickstart/contributing-to-projects) into your github account.
2. Follow the README.md for install and setup instructions. 
2. Branch off `main` and include your `issue number` along with the `task description` e.g. `feature/123-my-new-feature`. We use the following prefixes:
    - `feature/` for new features
    - `bug/` for bug fixes
    - `refactor/` for general refactoring
    - `docs/` for documentation changes
    - `test/` for test changes
    - `misc/` for other changes<br><br>
4. Write your code follow the [Code Style Guide](code-style-guide) and commit your changes to your branch.<br><br>
5. Ensure you have written tests for your changes and that they pass.<br><br>
6. If you have added a new feature (or updated an existing one), please update any relevent documenation to reflect the changes.<br><br>
7. Once complete, initiate a pull request from your folked version. This will trigger a review process and automated tests. If the tests fail, please fix the issues and push the changes to your branch. The tests will automatically re-run.<br><br>
8. Once a member of the core team has reviewed your contribution, changes maybe requested, once approved it will be merged into `main` and the issue will be closed.<br><br>

## Code

Please follow the [Code Style Guide](code-style-guide) when contributing.

## Testing

All contributions should include tests. Contributions without full test coverage will not be accepted.