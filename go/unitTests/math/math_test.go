package math

import (
	"testing"
)

// TestSum is a unit test for the math.Sum function
func TestSum(t *testing.T) {
	total := Sum(5, 5)
	if total != 10 {
		t.Errorf("Sum was incorrect, got: %d, want: %d.", total, 10)
	}
}
