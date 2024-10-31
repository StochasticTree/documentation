# Load a vector from json

## Description

Load a vector from json

## Usage

```r
loadVectorJson(json_object, json_vector_label, subfolder_name = NULL)
```

## Arguments

* `json_object`: Object of class `CppJson`
* `json_vector_label`: Label referring to a particular vector (i.e. "sigma2_samples") in the overall json hierarchy
* `subfolder_name`: (Optional) Name of the subfolder / hierarchy under which vector sits

## Value

R vector

