---
title: ForestSamples
---

# Class that stores draws from an random ensemble of decision trees

## Description

Wrapper around a C++ container of tree ensembles

## Public fields

* `forest_container_ptr`: External pointer to a C++ ForestContainer class

## Methods

### Public methods

* [`ForestSamples$new()`](#method-ForestSamples-new)
* [`ForestSamples$load_from_json()`](#method-ForestSamples-load_from_json)
* [`ForestSamples$append_from_json()`](#method-ForestSamples-append_from_json)
* [`ForestSamples$load_from_json_string()`](#method-ForestSamples-load_from_json_string)
* [`ForestSamples$append_from_json_string()`](#method-ForestSamples-append_from_json_string)
* [`ForestSamples$predict()`](#method-ForestSamples-predict)
* [`ForestSamples$predict_raw()`](#method-ForestSamples-predict_raw)
* [`ForestSamples$predict_raw_single_forest()`](#method-ForestSamples-predict_raw_single_forest)
* [`ForestSamples$predict_raw_single_tree()`](#method-ForestSamples-predict_raw_single_tree)
* [`ForestSamples$set_root_leaves()`](#method-ForestSamples-set_root_leaves)
* [`ForestSamples$prepare_for_sampler()`](#method-ForestSamples-prepare_for_sampler)
* [`ForestSamples$adjust_residual()`](#method-ForestSamples-adjust_residual)
* [`ForestSamples$save_json()`](#method-ForestSamples-save_json)
* [`ForestSamples$load_json()`](#method-ForestSamples-load_json)
* [`ForestSamples$num_samples()`](#method-ForestSamples-num_samples)
* [`ForestSamples$num_trees()`](#method-ForestSamples-num_trees)
* [`ForestSamples$output_dimension()`](#method-ForestSamples-output_dimension)
* [`ForestSamples$add_forest_with_constant_leaves()`](#method-ForestSamples-add_forest_with_constant_leaves)
* [`ForestSamples$add_numeric_split_tree()`](#method-ForestSamples-add_numeric_split_tree)
* [`ForestSamples$get_tree_leaves()`](#method-ForestSamples-get_tree_leaves)
* [`ForestSamples$get_tree_split_counts()`](#method-ForestSamples-get_tree_split_counts)
* [`ForestSamples$get_forest_split_counts()`](#method-ForestSamples-get_forest_split_counts)
* [`ForestSamples$get_aggregate_split_counts()`](#method-ForestSamples-get_aggregate_split_counts)
* [`ForestSamples$get_granular_split_counts()`](#method-ForestSamples-get_granular_split_counts)
* [`ForestSamples$ensemble_tree_max_depth()`](#method-ForestSamples-ensemble_tree_max_depth)
* [`ForestSamples$average_ensemble_max_depth()`](#method-ForestSamples-average_ensemble_max_depth)
* [`ForestSamples$average_max_depth()`](#method-ForestSamples-average_max_depth)
* [`ForestSamples$num_forest_leaves()`](#method-ForestSamples-num_forest_leaves)
* [`ForestSamples$sum_leaves_squared()`](#method-ForestSamples-sum_leaves_squared)
* [`ForestSamples$is_leaf_node()`](#method-ForestSamples-is_leaf_node)
* [`ForestSamples$is_numeric_split_node()`](#method-ForestSamples-is_numeric_split_node)
* [`ForestSamples$is_categorical_split_node()`](#method-ForestSamples-is_categorical_split_node)
* [`ForestSamples$parent_node()`](#method-ForestSamples-parent_node)
* [`ForestSamples$left_child_node()`](#method-ForestSamples-left_child_node)
* [`ForestSamples$right_child_node()`](#method-ForestSamples-right_child_node)
* [`ForestSamples$node_depth()`](#method-ForestSamples-node_depth)
* [`ForestSamples$node_split_index()`](#method-ForestSamples-node_split_index)
* [`ForestSamples$node_split_threshold()`](#method-ForestSamples-node_split_threshold)
* [`ForestSamples$node_split_categories()`](#method-ForestSamples-node_split_categories)
* [`ForestSamples$node_leaf_values()`](#method-ForestSamples-node_leaf_values)
* [`ForestSamples$num_nodes()`](#method-ForestSamples-num_nodes)
* [`ForestSamples$num_leaves()`](#method-ForestSamples-num_leaves)
* [`ForestSamples$num_leaf_parents()`](#method-ForestSamples-num_leaf_parents)
* [`ForestSamples$num_split_nodes()`](#method-ForestSamples-num_split_nodes)
* [`ForestSamples$nodes()`](#method-ForestSamples-nodes)
* [`ForestSamples$leaves()`](#method-ForestSamples-leaves)

### Method `new()`

Create a new ForestContainer object.

#### Usage

```
ForestSamples$new(
  num_trees,
  output_dimension = 1,
  is_leaf_constant = F,
  is_exponentiated = F
)
```

#### Arguments

* `num_trees`: Number of trees
* `output_dimension`: Dimensionality of the outcome model
* `is_leaf_constant`: Whether leaf is constant
* `is_exponentiated`: Whether forest predictions should be exponentiated before being returned

#### Returns

A new `ForestContainer` object.

### Method `load_from_json()`

Create a new `ForestContainer` object from a json object

#### Usage

```
ForestSamples$load_from_json(json_object, json_forest_label)
```

#### Arguments

* `json_object`: Object of class `CppJson`
* `json_forest_label`: Label referring to a particular forest (i.e. "forest_0") in the overall json hierarchy

#### Returns

A new `ForestContainer` object.

### Method `append_from_json()`

Append to a `ForestContainer` object from a json object

#### Usage

```
ForestSamples$append_from_json(json_object, json_forest_label)
```

#### Arguments

* `json_object`: Object of class `CppJson`
* `json_forest_label`: Label referring to a particular forest (i.e. "forest_0") in the overall json hierarchy

#### Returns

NULL

### Method `load_from_json_string()`

Create a new `ForestContainer` object from a json object

#### Usage

```
ForestSamples$load_from_json_string(json_string, json_forest_label)
```

#### Arguments

* `json_string`: JSON string which parses into object of class `CppJson`
* `json_forest_label`: Label referring to a particular forest (i.e. "forest_0") in the overall json hierarchy

#### Returns

A new `ForestContainer` object.

### Method `append_from_json_string()`

Append to a `ForestContainer` object from a json object

#### Usage

```
ForestSamples$append_from_json_string(json_string, json_forest_label)
```

#### Arguments

* `json_string`: JSON string which parses into object of class `CppJson`
* `json_forest_label`: Label referring to a particular forest (i.e. "forest_0") in the overall json hierarchy

#### Returns

NULL

### Method `predict()`

Predict every tree ensemble on every sample in `forest_dataset`

#### Usage

```
ForestSamples$predict(forest_dataset)
```

#### Arguments

* `forest_dataset`: `ForestDataset` R class

#### Returns

matrix of predictions with as many rows as in forest_dataset
and as many columns as samples in the `ForestContainer`

### Method `predict_raw()`

Predict "raw" leaf values (without being multiplied by basis) for every tree ensemble on every sample in `forest_dataset`

#### Usage

```
ForestSamples$predict_raw(forest_dataset)
```

#### Arguments

* `forest_dataset`: `ForestDataset` R class

#### Returns

Array of predictions for each observation in `forest_dataset` and
each sample in the `ForestSamples` class with each prediction having the
dimensionality of the forests' leaf model. In the case of a constant leaf model
or univariate leaf regression, this array is two-dimensional (number of observations,
number of forest samples). In the case of a multivariate leaf regression,
this array is three-dimension (number of observations, leaf model dimension,
number of samples).

### Method `predict_raw_single_forest()`

Predict "raw" leaf values (without being multiplied by basis) for a specific forest on every sample in `forest_dataset`

#### Usage

```
ForestSamples$predict_raw_single_forest(forest_dataset, forest_num)
```

#### Arguments

* `forest_dataset`: `ForestDataset` R class
* `forest_num`: Index of the forest sample within the container

#### Returns

matrix of predictions with as many rows as in forest_dataset
and as many columns as dimensions in the leaves of trees in `ForestContainer`

### Method `predict_raw_single_tree()`

Predict "raw" leaf values (without being multiplied by basis) for a specific tree in a specific forest on every observation in `forest_dataset`

#### Usage

```
ForestSamples$predict_raw_single_tree(forest_dataset, forest_num, tree_num)
```

#### Arguments

* `forest_dataset`: `ForestDataset` R class
* `forest_num`: Index of the forest sample within the container
* `tree_num`: Index of the tree to be queried

#### Returns

matrix of predictions with as many rows as in `forest_dataset`and as many columns as dimensions in the leaves of trees in `ForestContainer`

### Method `set_root_leaves()`

Set a constant predicted value for every tree in the ensemble.
Stops program if any tree is more than a root node.

#### Usage

```
ForestSamples$set_root_leaves(forest_num, leaf_value)
```

#### Arguments

* `forest_num`: Index of the forest sample within the container.
* `leaf_value`: Constant leaf value(s) to be fixed for each tree in the ensemble indexed by `forest_num`. Can be either a single number or a vector, depending on the forest's leaf dimension.

### Method `prepare_for_sampler()`

Set a constant predicted value for every tree in the ensemble.
Stops program if any tree is more than a root node.

#### Usage

```
ForestSamples$prepare_for_sampler(
  dataset,
  outcome,
  forest_model,
  leaf_model_int,
  leaf_value
)
```

#### Arguments

* `dataset`: `ForestDataset` Dataset class (covariates, basis, etc...)
* `outcome`: `Outcome` Outcome class (residual / partial residual)
* `forest_model`: `ForestModel` object storing tracking structures used in training / sampling
* `leaf_model_int`: Integer value encoding the leaf model type (0 = constant gaussian, 1 = univariate gaussian, 2 = multivariate gaussian, 3 = log linear variance).
* `leaf_value`: Constant leaf value(s) to be fixed for each tree in the ensemble indexed by `forest_num`. Can be either a single number or a vector, depending on the forest's leaf dimension.

### Method `adjust_residual()`

Adjusts residual based on the predictions of a forest
This is typically run just once at the beginning of a forest sampling algorithm.
After trees are initialized with constant root node predictions, their root predictions are subtracted out of the residual.

#### Usage

```
ForestSamples$adjust_residual(
  dataset,
  outcome,
  forest_model,
  requires_basis,
  forest_num,
  add
)
```

#### Arguments

* `dataset`: `ForestDataset` object storing the covariates and bases for a given forest
* `outcome`: `Outcome` object storing the residuals to be updated based on forest predictions
* `forest_model`: `ForestModel` object storing tracking structures used in training / sampling
* `requires_basis`: Whether or not a forest requires a basis for prediction
* `forest_num`: Index of forest used to update residuals
* `add`: Whether forest predictions should be added to or subtracted from residuals

### Method `save_json()`

Store the trees and metadata of `ForestDataset` class in a json file

#### Usage

```
ForestSamples$save_json(json_filename)
```

#### Arguments

* `json_filename`: Name of output json file (must end in ".json")

### Method `load_json()`

Load trees and metadata for an ensemble from a json file. Note that
any trees and metadata already present in `ForestDataset` class will
be overwritten.

#### Usage

```
ForestSamples$load_json(json_filename)
```

#### Arguments

* `json_filename`: Name of model input json file (must end in ".json")

### Method `num_samples()`

Return number of samples in a `ForestContainer` object

#### Usage

```
ForestSamples$num_samples()
```

#### Returns

Sample count

### Method `num_trees()`

Return number of trees in each ensemble of a `ForestContainer` object

#### Usage

```
ForestSamples$num_trees()
```

#### Returns

Tree count

### Method `output_dimension()`

Return output dimension of trees in a `ForestContainer` object

#### Usage

```
ForestSamples$output_dimension()
```

#### Returns

Leaf node parameter size

### Method `add_forest_with_constant_leaves()`

Add a new all-root ensemble to the container, with all of the leaves
set to the value / vector provided

#### Usage

```
ForestSamples$add_forest_with_constant_leaves(leaf_value)
```

#### Arguments

* `leaf_value`: Value (or vector of values) to initialize root nodes in tree

### Method `add_numeric_split_tree()`

Add a numeric (i.e. X[,i](,i) \<= c) split to a given tree in the ensemble

#### Usage

```
ForestSamples$add_numeric_split_tree(
  forest_num,
  tree_num,
  leaf_num,
  feature_num,
  split_threshold,
  left_leaf_value,
  right_leaf_value
)
```

#### Arguments

* `forest_num`: Index of the forest which contains the tree to be split
* `tree_num`: Index of the tree to be split
* `leaf_num`: Leaf to be split
* `feature_num`: Feature that defines the new split
* `split_threshold`: Value that defines the cutoff of the new split
* `left_leaf_value`: Value (or vector of values) to assign to the newly created left node
* `right_leaf_value`: Value (or vector of values) to assign to the newly created right node

### Method `get_tree_leaves()`

Retrieve a vector of indices of leaf nodes for a given tree in a given forest

#### Usage

```
ForestSamples$get_tree_leaves(forest_num, tree_num)
```

#### Arguments

* `forest_num`: Index of the forest which contains tree `tree_num`
* `tree_num`: Index of the tree for which leaf indices will be retrieved

### Method `get_tree_split_counts()`

Retrieve a vector of split counts for every training set variable in a given tree in a given forest

#### Usage

```
ForestSamples$get_tree_split_counts(forest_num, tree_num, num_features)
```

#### Arguments

* `forest_num`: Index of the forest which contains tree `tree_num`
* `tree_num`: Index of the tree for which split counts will be retrieved
* `num_features`: Total number of features in the training set

### Method `get_forest_split_counts()`

Retrieve a vector of split counts for every training set variable in a given forest

#### Usage

```
ForestSamples$get_forest_split_counts(forest_num, num_features)
```

#### Arguments

* `forest_num`: Index of the forest for which split counts will be retrieved
* `num_features`: Total number of features in the training set

### Method `get_aggregate_split_counts()`

Retrieve a vector of split counts for every training set variable in a given forest, aggregated across ensembles and trees

#### Usage

```
ForestSamples$get_aggregate_split_counts(num_features)
```

#### Arguments

* `num_features`: Total number of features in the training set

### Method `get_granular_split_counts()`

Retrieve a vector of split counts for every training set variable in a given forest, reported separately for each ensemble and tree

#### Usage

```
ForestSamples$get_granular_split_counts(num_features)
```

#### Arguments

* `num_features`: Total number of features in the training set

### Method `ensemble_tree_max_depth()`

Maximum depth of a specific tree in a specific ensemble in a `ForestSamples` object

#### Usage

```
ForestSamples$ensemble_tree_max_depth(ensemble_num, tree_num)
```

#### Arguments

* `ensemble_num`: Ensemble number
* `tree_num`: Tree index within ensemble `ensemble_num`

#### Returns

Maximum leaf depth

### Method `average_ensemble_max_depth()`

Average the maximum depth of each tree in a given ensemble in a `ForestSamples` object

#### Usage

```
ForestSamples$average_ensemble_max_depth(ensemble_num)
```

#### Arguments

* `ensemble_num`: Ensemble number

#### Returns

Average maximum depth

### Method `average_max_depth()`

Average the maximum depth of each tree in each ensemble in a `ForestContainer` object

#### Usage

```
ForestSamples$average_max_depth()
```

#### Returns

Average maximum depth

### Method `num_forest_leaves()`

Number of leaves in a given ensemble in a `ForestSamples` object

#### Usage

```
ForestSamples$num_forest_leaves(forest_num)
```

#### Arguments

* `forest_num`: Index of the ensemble to be queried

#### Returns

Count of leaves in the ensemble stored at `forest_num`

### Method `sum_leaves_squared()`

Sum of squared (raw) leaf values in a given ensemble in a `ForestSamples` object

#### Usage

```
ForestSamples$sum_leaves_squared(forest_num)
```

#### Arguments

* `forest_num`: Index of the ensemble to be queried

#### Returns

Average maximum depth

### Method `is_leaf_node()`

Whether or not a given node of a given tree in a given forest in the `ForestSamples` is a leaf

#### Usage

```
ForestSamples$is_leaf_node(forest_num, tree_num, node_id)
```

#### Arguments

* `forest_num`: Index of the forest to be queried
* `tree_num`: Index of the tree to be queried
* `node_id`: Index of the node to be queried

#### Returns

`TRUE` if node is a leaf, `FALSE` otherwise

### Method `is_numeric_split_node()`

Whether or not a given node of a given tree in a given forest in the `ForestSamples` is a numeric split node

#### Usage

```
ForestSamples$is_numeric_split_node(forest_num, tree_num, node_id)
```

#### Arguments

* `forest_num`: Index of the forest to be queried
* `tree_num`: Index of the tree to be queried
* `node_id`: Index of the node to be queried

#### Returns

`TRUE` if node is a numeric split node, `FALSE` otherwise

### Method `is_categorical_split_node()`

Whether or not a given node of a given tree in a given forest in the `ForestSamples` is a categorical split node

#### Usage

```
ForestSamples$is_categorical_split_node(forest_num, tree_num, node_id)
```

#### Arguments

* `forest_num`: Index of the forest to be queried
* `tree_num`: Index of the tree to be queried
* `node_id`: Index of the node to be queried

#### Returns

`TRUE` if node is a categorical split node, `FALSE` otherwise

### Method `parent_node()`

Parent node of given node of a given tree in a given forest in a `ForestSamples` object

#### Usage

```
ForestSamples$parent_node(forest_num, tree_num, node_id)
```

#### Arguments

* `forest_num`: Index of the forest to be queried
* `tree_num`: Index of the tree to be queried
* `node_id`: Index of the node to be queried

#### Returns

Integer ID of the parent node

### Method `left_child_node()`

Left child node of given node of a given tree in a given forest in a `ForestSamples` object

#### Usage

```
ForestSamples$left_child_node(forest_num, tree_num, node_id)
```

#### Arguments

* `forest_num`: Index of the forest to be queried
* `tree_num`: Index of the tree to be queried
* `node_id`: Index of the node to be queried

#### Returns

Integer ID of the left child node

### Method `right_child_node()`

Right child node of given node of a given tree in a given forest in a `ForestSamples` object

#### Usage

```
ForestSamples$right_child_node(forest_num, tree_num, node_id)
```

#### Arguments

* `forest_num`: Index of the forest to be queried
* `tree_num`: Index of the tree to be queried
* `node_id`: Index of the node to be queried

#### Returns

Integer ID of the right child node

### Method `node_depth()`

Depth of given node of a given tree in a given forest in a `ForestSamples` object, with 0 depth for the root node.

#### Usage

```
ForestSamples$node_depth(forest_num, tree_num, node_id)
```

#### Arguments

* `forest_num`: Index of the forest to be queried
* `tree_num`: Index of the tree to be queried
* `node_id`: Index of the node to be queried

#### Returns

Integer valued depth of the node

### Method `node_split_index()`

Split index of given node of a given tree in a given forest in a `ForestSamples` object. Returns `-1` is node is a leaf.

#### Usage

```
ForestSamples$node_split_index(forest_num, tree_num, node_id)
```

#### Arguments

* `forest_num`: Index of the forest to be queried
* `tree_num`: Index of the tree to be queried
* `node_id`: Index of the node to be queried

#### Returns

Integer valued depth of the node

### Method `node_split_threshold()`

Threshold that defines a numeric split for a given node of a given tree in a given forest in a `ForestSamples` object.
Returns `Inf` if the node is a leaf or a categorical split node.

#### Usage

```
ForestSamples$node_split_threshold(forest_num, tree_num, node_id)
```

#### Arguments

* `forest_num`: Index of the forest to be queried
* `tree_num`: Index of the tree to be queried
* `node_id`: Index of the node to be queried

#### Returns

Threshold defining a split for the node

### Method `node_split_categories()`

Array of category indices that define a categorical split for a given node of a given tree in a given forest in a `ForestSamples` object.
Returns `c(Inf)` if the node is a leaf or a numeric split node.

#### Usage

```
ForestSamples$node_split_categories(forest_num, tree_num, node_id)
```

#### Arguments

* `forest_num`: Index of the forest to be queried
* `tree_num`: Index of the tree to be queried
* `node_id`: Index of the node to be queried

#### Returns

Categories defining a split for the node

### Method `node_leaf_values()`

Leaf node value(s) for a given node of a given tree in a given forest in a `ForestSamples` object.
Values are stale if the node is a split node.

#### Usage

```
ForestSamples$node_leaf_values(forest_num, tree_num, node_id)
```

#### Arguments

* `forest_num`: Index of the forest to be queried
* `tree_num`: Index of the tree to be queried
* `node_id`: Index of the node to be queried

#### Returns

Vector (often univariate) of leaf values

### Method `num_nodes()`

Number of nodes in a given tree in a given forest in a `ForestSamples` object.

#### Usage

```
ForestSamples$num_nodes(forest_num, tree_num)
```

#### Arguments

* `forest_num`: Index of the forest to be queried
* `tree_num`: Index of the tree to be queried

#### Returns

Count of total tree nodes

### Method `num_leaves()`

Number of leaves in a given tree in a given forest in a `ForestSamples` object.

#### Usage

```
ForestSamples$num_leaves(forest_num, tree_num)
```

#### Arguments

* `forest_num`: Index of the forest to be queried
* `tree_num`: Index of the tree to be queried

#### Returns

Count of total tree leaves

### Method `num_leaf_parents()`

Number of leaf parents (split nodes with two leaves as children) in a given tree in a given forest in a `ForestSamples` object.

#### Usage

```
ForestSamples$num_leaf_parents(forest_num, tree_num)
```

#### Arguments

* `forest_num`: Index of the forest to be queried
* `tree_num`: Index of the tree to be queried

#### Returns

Count of total tree leaf parents

### Method `num_split_nodes()`

Number of split nodes in a given tree in a given forest in a `ForestSamples` object.

#### Usage

```
ForestSamples$num_split_nodes(forest_num, tree_num)
```

#### Arguments

* `forest_num`: Index of the forest to be queried
* `tree_num`: Index of the tree to be queried

#### Returns

Count of total tree split nodes

### Method `nodes()`

Array of node indices in a given tree in a given forest in a `ForestSamples` object.

#### Usage

```
ForestSamples$nodes(forest_num, tree_num)
```

#### Arguments

* `forest_num`: Index of the forest to be queried
* `tree_num`: Index of the tree to be queried

#### Returns

Indices of tree nodes

### Method `leaves()`

Array of leaf indices in a given tree in a given forest in a `ForestSamples` object.

#### Usage

```
ForestSamples$leaves(forest_num, tree_num)
```

#### Arguments

* `forest_num`: Index of the forest to be queried
* `tree_num`: Index of the tree to be queried

#### Returns

Indices of leaf nodes

