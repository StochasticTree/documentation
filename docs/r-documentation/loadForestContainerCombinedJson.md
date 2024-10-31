# Combine multiple JSON model objects containing forests (with the same hierarchy / schema) into a single forest_container

## Description

Combine multiple JSON model objects containing forests (with the same hierarchy / schema) into a single forest_container

## Usage

```r
loadForestContainerCombinedJson(json_object_list, json_forest_label)
```

## Arguments

* `json_object_list`: List of objects of class `CppJson`
* `json_forest_label`: Label referring to a particular forest (i.e. "forest_0") in the overall json hierarchy (must exist in every json object in the list)

## Value

`ForestSamples` object

