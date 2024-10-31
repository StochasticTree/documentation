# Load a scalar from json

## Description

Load a scalar from json

## Usage

```r
loadScalarJson(json_object, json_scalar_label, subfolder_name = NULL)
```

## Arguments

* `json_object`: Object of class `CppJson`
* `json_scalar_label`: Label referring to a particular scalar / string value (i.e. "num_samples") in the overall json hierarchy
* `subfolder_name`: (Optional) Name of the subfolder / hierarchy under which vector sits

## Value

R vector

