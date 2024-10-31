# Combine multiple JSON model objects containing random effects (with the same hierarchy / schema) into a single container

## Description

Combine multiple JSON model objects containing random effects (with the same hierarchy / schema) into a single container

## Usage

```r
loadRandomEffectSamplesCombinedJson(json_object_list, json_rfx_num)
```

## Arguments

* `json_object_list`: List of objects of class `CppJson`
* `json_rfx_num`: Integer index indicating the position of the random effects term to be unpacked

## Value

`RandomEffectSamples` object

