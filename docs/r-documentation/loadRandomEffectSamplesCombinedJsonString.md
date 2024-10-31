# Combine multiple JSON strings representing model objects containing random effects (with the same hierarchy / schema) into a single container

## Description

Combine multiple JSON strings representing model objects containing random effects (with the same hierarchy / schema) into a single container

## Usage

```r
loadRandomEffectSamplesCombinedJsonString(json_string_list, json_rfx_num)
```

## Arguments

* `json_string_list`: List of objects of class `CppJson`
* `json_rfx_num`: Integer index indicating the position of the random effects term to be unpacked

## Value

`RandomEffectSamples` object

