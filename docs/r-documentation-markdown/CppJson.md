# Class that stores draws from an random ensemble of decision trees

## Description

Wrapper around a C++ container of tree ensembles

## Public fields

* `json_ptr`: External pointer to a C++ nlohmann::json object
* `num_forests`: Number of forests in the nlohmann::json object
* `forest_labels`: Names of forest objects in the overall nlohmann::json object
* `num_rfx`: Number of random effects terms in the nlohman::json object
* `rfx_container_labels`: Names of rfx container objects in the overall nlohmann::json object
* `rfx_mapper_labels`: Names of rfx label mapper objects in the overall nlohmann::json object
* `rfx_groupid_labels`: Names of rfx group id objects in the overall nlohmann::json object

## Methods

### Public methods

* [`CppJson$new()`](#method-CppJson-new)
* [`CppJson$add_forest()`](#method-CppJson-add_forest)
* [`CppJson$add_random_effects()`](#method-CppJson-add_random_effects)
* [`CppJson$add_scalar()`](#method-CppJson-add_scalar)
* [`CppJson$add_boolean()`](#method-CppJson-add_boolean)
* [`CppJson$add_string()`](#method-CppJson-add_string)
* [`CppJson$add_vector()`](#method-CppJson-add_vector)
* [`CppJson$add_string_vector()`](#method-CppJson-add_string_vector)
* [`CppJson$add_list()`](#method-CppJson-add_list)
* [`CppJson$add_string_list()`](#method-CppJson-add_string_list)
* [`CppJson$get_scalar()`](#method-CppJson-get_scalar)
* [`CppJson$get_boolean()`](#method-CppJson-get_boolean)
* [`CppJson$get_string()`](#method-CppJson-get_string)
* [`CppJson$get_vector()`](#method-CppJson-get_vector)
* [`CppJson$get_string_vector()`](#method-CppJson-get_string_vector)
* [`CppJson$get_numeric_list()`](#method-CppJson-get_numeric_list)
* [`CppJson$get_string_list()`](#method-CppJson-get_string_list)
* [`CppJson$return_json_string()`](#method-CppJson-return_json_string)
* [`CppJson$save_file()`](#method-CppJson-save_file)
* [`CppJson$load_from_file()`](#method-CppJson-load_from_file)
* [`CppJson$load_from_string()`](#method-CppJson-load_from_string)

### Method `new()`

Create a new CppJson object.

#### Usage

```
CppJson$new()
```

#### Returns

A new `CppJson` object.

### Method `add_forest()`

Convert a forest container to json and add to the current `CppJson` object

#### Usage

```
CppJson$add_forest(forest_samples)
```

#### Arguments

* `forest_samples`: `ForestSamples` R class

#### Returns

NULL

### Method `add_random_effects()`

Convert a random effects container to json and add to the current `CppJson` object

#### Usage

```
CppJson$add_random_effects(rfx_samples)
```

#### Arguments

* `rfx_samples`: `RandomEffectSamples` R class

#### Returns

NULL

### Method `add_scalar()`

Add a scalar to the json object under the name "field_name" (with optional subfolder "subfolder_name")

#### Usage

```
CppJson$add_scalar(field_name, field_value, subfolder_name = NULL)
```

#### Arguments

* `field_name`: The name of the field to be added to json
* `field_value`: Numeric value of the field to be added to json
* `subfolder_name`: (Optional) Name of the subfolder / hierarchy under which to place the value

#### Returns

NULL

### Method `add_boolean()`

Add a boolean value to the json object under the name "field_name" (with optional subfolder "subfolder_name")

#### Usage

```
CppJson$add_boolean(field_name, field_value, subfolder_name = NULL)
```

#### Arguments

* `field_name`: The name of the field to be added to json
* `field_value`: Numeric value of the field to be added to json
* `subfolder_name`: (Optional) Name of the subfolder / hierarchy under which to place the value

#### Returns

NULL

### Method `add_string()`

Add a string value to the json object under the name "field_name" (with optional subfolder "subfolder_name")

#### Usage

```
CppJson$add_string(field_name, field_value, subfolder_name = NULL)
```

#### Arguments

* `field_name`: The name of the field to be added to json
* `field_value`: Numeric value of the field to be added to json
* `subfolder_name`: (Optional) Name of the subfolder / hierarchy under which to place the value

#### Returns

NULL

### Method `add_vector()`

Add an array to the json object under the name "field_name" (with optional subfolder "subfolder_name")

#### Usage

```
CppJson$add_vector(field_name, field_vector, subfolder_name = NULL)
```

#### Arguments

* `field_name`: The name of the field to be added to json
* `field_vector`: Vector to be stored in json
* `subfolder_name`: (Optional) Name of the subfolder / hierarchy under which to place the value

#### Returns

NULL

### Method `add_string_vector()`

Add an array to the json object under the name "field_name" (with optional subfolder "subfolder_name")

#### Usage

```
CppJson$add_string_vector(field_name, field_vector, subfolder_name = NULL)
```

#### Arguments

* `field_name`: The name of the field to be added to json
* `field_vector`: Character vector to be stored in json
* `subfolder_name`: (Optional) Name of the subfolder / hierarchy under which to place the value

#### Returns

NULL

### Method `add_list()`

Add a list of vectors (as an object map of arrays) to the json object under the name "field_name"

#### Usage

```
CppJson$add_list(field_name, field_list)
```

#### Arguments

* `field_name`: The name of the field to be added to json
* `field_list`: List to be stored in json

#### Returns

NULL

### Method `add_string_list()`

Add a list of vectors (as an object map of arrays) to the json object under the name "field_name"

#### Usage

```
CppJson$add_string_list(field_name, field_list)
```

#### Arguments

* `field_name`: The name of the field to be added to json
* `field_list`: List to be stored in json

#### Returns

NULL

### Method `get_scalar()`

Retrieve a scalar value from the json object under the name "field_name" (with optional subfolder "subfolder_name")

#### Usage

```
CppJson$get_scalar(field_name, subfolder_name = NULL)
```

#### Arguments

* `field_name`: The name of the field to be accessed from json
* `subfolder_name`: (Optional) Name of the subfolder / hierarchy under which the field is stored

#### Returns

NULL

### Method `get_boolean()`

Retrieve a boolean value from the json object under the name "field_name" (with optional subfolder "subfolder_name")

#### Usage

```
CppJson$get_boolean(field_name, subfolder_name = NULL)
```

#### Arguments

* `field_name`: The name of the field to be accessed from json
* `subfolder_name`: (Optional) Name of the subfolder / hierarchy under which the field is stored

#### Returns

NULL

### Method `get_string()`

Retrieve a string value from the json object under the name "field_name" (with optional subfolder "subfolder_name")

#### Usage

```
CppJson$get_string(field_name, subfolder_name = NULL)
```

#### Arguments

* `field_name`: The name of the field to be accessed from json
* `subfolder_name`: (Optional) Name of the subfolder / hierarchy under which the field is stored

#### Returns

NULL

### Method `get_vector()`

Retrieve a vector from the json object under the name "field_name" (with optional subfolder "subfolder_name")

#### Usage

```
CppJson$get_vector(field_name, subfolder_name = NULL)
```

#### Arguments

* `field_name`: The name of the field to be accessed from json
* `subfolder_name`: (Optional) Name of the subfolder / hierarchy under which the field is stored

#### Returns

NULL

### Method `get_string_vector()`

Retrieve a character vector from the json object under the name "field_name" (with optional subfolder "subfolder_name")

#### Usage

```
CppJson$get_string_vector(field_name, subfolder_name = NULL)
```

#### Arguments

* `field_name`: The name of the field to be accessed from json
* `subfolder_name`: (Optional) Name of the subfolder / hierarchy under which the field is stored

#### Returns

NULL

### Method `get_numeric_list()`

Reconstruct a list of numeric vectors from the json object stored under "field_name"

#### Usage

```
CppJson$get_numeric_list(field_name, key_names)
```

#### Arguments

* `field_name`: The name of the field to be added to json
* `key_names`: Vector of names of list elements (each of which is a vector)

#### Returns

NULL

### Method `get_string_list()`

Reconstruct a list of string vectors from the json object stored under "field_name"

#### Usage

```
CppJson$get_string_list(field_name, key_names)
```

#### Arguments

* `field_name`: The name of the field to be added to json
* `key_names`: Vector of names of list elements (each of which is a vector)

#### Returns

NULL

### Method `return_json_string()`

Convert a JSON object to in-memory string

#### Usage

```
CppJson$return_json_string()
```

#### Returns

JSON string

### Method `save_file()`

Save a json object to file

#### Usage

```
CppJson$save_file(filename)
```

#### Arguments

* `filename`: String of filepath, must end in ".json"

#### Returns

NULL

### Method `load_from_file()`

Load a json object from file

#### Usage

```
CppJson$load_from_file(filename)
```

#### Arguments

* `filename`: String of filepath, must end in ".json"

#### Returns

NULL

### Method `load_from_string()`

Load a json object from string

#### Usage

```
CppJson$load_from_string(json_string)
```

#### Arguments

* `json_string`: JSON string dump

#### Returns

NULL

