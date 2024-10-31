# Class that wraps a C++ random number generator (for reproducibility)

## Description

Persists a C++ random number generator throughout an R session to
ensure reproducibility from a given random seed. If no seed is provided,
the C++ random number generator is initialized using `std::random_device`.

## Public fields

* `rng_ptr`: External pointer to a C++ std::mt19937 class

## Methods

### Public methods

* [`CppRNG$new()`](#method-CppRNG-new)

### Method `new()`

Create a new CppRNG object.

#### Usage

```
CppRNG$new(random_seed = -1)
```

#### Arguments

* `random_seed`: (Optional) random seed for sampling

#### Returns

A new `CppRNG` object.

