# Unit tests in Go

This example shows how to create unit tests in Go. 

The _unitTests/math_ package exports a _Sum_ function that sums two integers. The file _math/math_test.go_ contains a unit test for testing that function.

The unit test is run by invoking _go test unitTests/math_, ie, by asking go to run the unit tests defined for the package _math_ of our current solution. The test coverage can be obtained by invoking _go test unitTests/math --cover_.

Specific _go test_ help can be obtained by executing _go help test_

# Key concepts of unit tests in Go

This is a list of concepts to consider when dealing with tests in Go, specially if coming from other languages as Javascript/Typescript.

- Go tests are natively executed with the _go_ tool via the _go test_ command
- Go test files must be named as _package\_test.go_
- Inside a test file, test function names must start by _Test_
- Opposite to JS/TS, test files are intented to be part of every package, what means that their location must also be the same package directory (in JS/TS tests are usually located in a /tests directory)
- Go tests retoric is not based on assertions (assertEqual(valueA, valueB)) or expectations (expect(valueA).beEqual(valueB)). They are based on a common if(<comparison>
- _go test_ doesn't support stating a descriptive text per test (no more "should do something" or "assert something is done")
- _go test_ doesn't support grouping the tests in test suites. Indeed, they are grouped by package.
- Go includes the library _testing_ for performing tests
- A Go test function admits a unique parameter `(t *testing.T)`
- A Go test must perform an operation, check the result and in case of being wrong, use the _testing_ library methods to inform of the error.
- The usual _testing_ library method to inform about an error are `Error/Errorf`, `Fail/Failf` and `Fatal/Fatalf`. All take the same arguments: a string for `Error`, `Fail` and `Fatal` and a formatted string and arguments for `Errorf`, `Failf` and `Fatalf`
- Tests are executed:
  - By calling _go test_. The tests in the current directory will be executed
  - By calling _go test \<location\>_. The tests in the directory \<location\> will be executed (hint: set \<location\> to _./..._ to run all the tests in the current directory and subdirectories).
  - By calling _go test \<package\>_. The tests of \<package\> will be executed.
- Specific _go test_ help can be obtained by executing _go help test_
- Test coverage can be obtained by executing _go test [(\<location\>|\<package\>)] -cover_
- Cached tests can be deleted by executing _go clean -testcache_