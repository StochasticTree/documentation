# Convert a vector of unordered categorical data (either numeric or character

## Description

To allow for prediction on "unseen" categories in a test dataset, this
procedure pads the one-hot matrix with a blank "other" column.
Test set observations that contain categories not in `levels(factor(x_input))`will all be mapped to this column.

## Usage

```r
oneHotInitializeAndEncode(x_input)
```

## Arguments

* `x_input`: Vector of unordered categorical data (typically either strings
integers, but this function also accepts floating point data).

## Value

List containing a binary one-hot matrix and the unique levels of the
input variable. These unique levels are used in the BCF and BART functions.

## Examples

```r
x <- c("a","c","b","c","d","a","c","a","b","d")
x_onehot <- oneHotInitializeAndEncode(x)
```

