---
title: loadForestContainerCombinedJsonString
---

# Combine multiple JSON strings representing model objects containing forests (with the same hierarchy / schema) into a single forest_container

## Description

Combine multiple JSON strings representing model objects containing forests (with the same hierarchy / schema) into a single forest_container

## Usage

```r
loadForestContainerCombinedJsonString(json_string_list, json_forest_label)
```

## Arguments

* `json_string_list`: List of strings that parse into objects of type `CppJson`
* `json_forest_label`: Label referring to a particular forest (i.e. "forest_0") in the overall json hierarchy (must exist in every json object in the list)

## Value

`ForestSamples` object

