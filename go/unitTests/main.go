package main

import (
	"log"
	"unitTests/math"
)

func main() {
	a := 4
	b := 5
	log.Printf("The sum of %d and %d is %d", a, b, math.Sum(a, b))
}
