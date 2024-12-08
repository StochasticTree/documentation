---
title: class `ForestContainerCpp`
---

# class `ForestContainerCpp`

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public inline  `[`ForestContainerCpp`](#classForestContainerCpp_1a0fef3ffe1672ca77891544f3d0716e6b)`(int num_trees,int output_dimension,bool is_leaf_constant,bool is_exponentiated)` | 
`public inline  `[`~ForestContainerCpp`](#classForestContainerCpp_1aaf6e33c00c6b6c4838079ea3cbf53674)`()` | 
`public inline int `[`OutputDimension`](#classForestContainerCpp_1a13c991845a804a8f39b7b05d93a88dc0)`()` | 
`public inline int `[`NumSamples`](#classForestContainerCpp_1a79d220afd860e3697fb20b4ba0ed6e6e)`()` | 
`public inline int `[`NumLeavesForest`](#classForestContainerCpp_1aaef9c9d9c0463a71571308981a2929ad)`(int forest_num)` | 
`public inline double `[`SumLeafSquared`](#classForestContainerCpp_1a7d625fdf2b189349aa9d5c0c86606965)`(int forest_num)` | 
`public inline void `[`DeleteSample`](#classForestContainerCpp_1aa326d10037e7ce6a141e647b1c8987ef)`(int forest_num)` | 
`public inline py::array_t< double > `[`Predict`](#classForestContainerCpp_1a2fd9c5aa05154d9c07b49a7dc677f54c)`(`[`ForestDatasetCpp`](#classForestDatasetCpp)` & dataset)` | 
`public inline py::array_t< double > `[`PredictRaw`](#classForestContainerCpp_1a4c8c2eb1effbddbb358bf1b6c4341d59)`(`[`ForestDatasetCpp`](#classForestDatasetCpp)` & dataset)` | 
`public inline py::array_t< double > `[`PredictRawSingleForest`](#classForestContainerCpp_1a780d740c0c102a677d611ebf0e476cdb)`(`[`ForestDatasetCpp`](#classForestDatasetCpp)` & dataset,int forest_num)` | 
`public inline py::array_t< double > `[`PredictRawSingleTree`](#classForestContainerCpp_1aa56172c76d74f5a71c3042cf995342e5)`(`[`ForestDatasetCpp`](#classForestDatasetCpp)` & dataset,int forest_num,int tree_num)` | 
`public inline void `[`SetRootValue`](#classForestContainerCpp_1a1d85e6b963eeb042dcdea70c47f45d3f)`(int forest_num,double leaf_value)` | 
`public inline void `[`SetRootVector`](#classForestContainerCpp_1a492b80b03c79bfa94d59c7de11303abd)`(int forest_num,py::array_t< double > & leaf_vector,int leaf_size)` | 
`public inline void `[`InitializeRootValue`](#classForestContainerCpp_1a4715522f9b93610451cb792aee74c15f)`(double val)` | 
`public inline void `[`InitializeRootVector`](#classForestContainerCpp_1a650ae9edb6785705969fe8d9266cd588)`(std::vector< double > vals)` | 
`public void `[`AdjustResidual`](#classForestContainerCpp_1a1ef71ac20bff3ae308a8daff78da06f8)`(`[`ForestDatasetCpp`](#classForestDatasetCpp)` & dataset,`[`ResidualCpp`](#classResidualCpp)` & residual,`[`ForestSamplerCpp`](#classForestSamplerCpp)` & sampler,bool requires_basis,int forest_num,bool add)` | 
`public inline void `[`SaveToJsonFile`](#classForestContainerCpp_1a30841ef6d674959e412aec7d677f58e8)`(std::string json_filename)` | 
`public inline void `[`LoadFromJsonFile`](#classForestContainerCpp_1a1169f0e3c9f2f33fca6da0fd61820c0f)`(std::string json_filename)` | 
`public void `[`LoadFromJson`](#classForestContainerCpp_1adce3d8dd9ca9866e06cc7cefb11ac010)`(`[`JsonCpp`](#classJsonCpp)` & json,std::string forest_label)` | 
`public inline std::string `[`DumpJsonString`](#classForestContainerCpp_1a78b5cee874333c52d7b0ca5d9af4da31)`()` | 
`public inline void `[`LoadFromJsonString`](#classForestContainerCpp_1a8325daf220502cf275c2e83681d40ed9)`(std::string & json_string)` | 
`public inline StochTree::ForestContainer * `[`GetContainer`](#classForestContainerCpp_1a890e6d02f416b973d79ef4d847b2bae4)`()` | 
`public inline StochTree::TreeEnsemble * `[`GetForest`](#classForestContainerCpp_1acea2c4d74677584b9c0fb35bcdbcf0b5)`(int i)` | 
`public inline nlohmann::json `[`ToJson`](#classForestContainerCpp_1aedc3756fab2320ff704e507ed4229766)`()` | 
`public inline void `[`AddSampleValue`](#classForestContainerCpp_1ab9ef774f9d03be1b6027e77c9a87801f)`(double leaf_value)` | 
`public inline void `[`AddSampleVector`](#classForestContainerCpp_1a614daa8ea9cbee47b6f5582874bd32bb)`(py::array_t< double > leaf_vector)` | 
`public inline void `[`AddNumericSplitVector`](#classForestContainerCpp_1ae5c5e5444d988e72d097c965b876324c)`(int forest_num,int tree_num,int leaf_num,int feature_num,double split_threshold,py::array_t< double > left_leaf_vector,py::array_t< double > right_leaf_vector)` | 
`public inline void `[`AddNumericSplitValue`](#classForestContainerCpp_1ab898857480955a868d0d356f2e534ae8)`(int forest_num,int tree_num,int leaf_num,int feature_num,double split_threshold,double left_leaf_value,double right_leaf_value)` | 
`public inline py::array_t< int > `[`GetTreeLeaves`](#classForestContainerCpp_1a0c2a1ea7f43b72e9fd88a8bb6aaaa638)`(int forest_num,int tree_num)` | 
`public inline py::array_t< int > `[`GetTreeSplitCounts`](#classForestContainerCpp_1a28b6eecc84b861ca77558cf99d99274d)`(int forest_num,int tree_num,int num_features)` | 
`public inline py::array_t< int > `[`GetForestSplitCounts`](#classForestContainerCpp_1a5243383cf3ad209cfca700ec1bf2fc7f)`(int forest_num,int num_features)` | 
`public inline py::array_t< int > `[`GetOverallSplitCounts`](#classForestContainerCpp_1ac937d908979e4aebef100ab28dab2bc0)`(int num_features)` | 
`public inline py::array_t< int > `[`GetGranularSplitCounts`](#classForestContainerCpp_1af3879b88e50f645bf6f97c1fb360de75)`(int num_features)` | 
`public inline bool `[`IsLeafNode`](#classForestContainerCpp_1a37e496b5c0caa7a0420e073607d32fa0)`(int forest_id,int tree_id,int node_id)` | 
`public inline bool `[`IsNumericSplitNode`](#classForestContainerCpp_1a86154e0a0f794637a748d62cdd3b662a)`(int forest_id,int tree_id,int node_id)` | 
`public inline bool `[`IsCategoricalSplitNode`](#classForestContainerCpp_1a0f542f3cca9b87a72dde44910db5d27f)`(int forest_id,int tree_id,int node_id)` | 
`public inline int `[`ParentNode`](#classForestContainerCpp_1a4064dfbf5232aee6fd80c8b86774eee1)`(int forest_id,int tree_id,int node_id)` | 
`public inline int `[`LeftChildNode`](#classForestContainerCpp_1a8d529a702c1ca97266bb72f05eda37be)`(int forest_id,int tree_id,int node_id)` | 
`public inline int `[`RightChildNode`](#classForestContainerCpp_1ac7950e8703636f8bb235fe75dd960265)`(int forest_id,int tree_id,int node_id)` | 
`public inline int `[`SplitIndex`](#classForestContainerCpp_1a7dd8e6e0282043920a503581e9b43cd3)`(int forest_id,int tree_id,int node_id)` | 
`public inline int `[`NodeDepth`](#classForestContainerCpp_1ae73b1c0fdc9ab3a3c30c31c2e4b7cb9a)`(int forest_id,int tree_id,int node_id)` | 
`public inline double `[`SplitThreshold`](#classForestContainerCpp_1a4bac1c1cdd1a56bdfff32cb0ff576142)`(int forest_id,int tree_id,int node_id)` | 
`public inline py::array_t< int > `[`SplitCategories`](#classForestContainerCpp_1ab895beadb6d57f7411d06646858c5d04)`(int forest_id,int tree_id,int node_id)` | 
`public inline py::array_t< double > `[`NodeLeafValues`](#classForestContainerCpp_1a19e1ec1cf34b3dd0e5fd8dafd8ebbdcd)`(int forest_id,int tree_id,int node_id)` | 
`public inline int `[`NumNodes`](#classForestContainerCpp_1ad456f4a52d2cef77cf72939e992ebd3b)`(int forest_id,int tree_id)` | 
`public inline int `[`NumLeaves`](#classForestContainerCpp_1a5e567f2b6c4291bc061358616c259de0)`(int forest_id,int tree_id)` | 
`public inline int `[`NumLeafParents`](#classForestContainerCpp_1a1bc9fb5b355a50d8439dd5a46a7da17e)`(int forest_id,int tree_id)` | 
`public inline int `[`NumSplitNodes`](#classForestContainerCpp_1a4a97cc11868360dd617236319dec49f8)`(int forest_id,int tree_id)` | 
`public inline py::array_t< int > `[`Nodes`](#classForestContainerCpp_1aa85b1490e3b552d9b60e9ffcf40b282d)`(int forest_id,int tree_id)` | 
`public inline py::array_t< int > `[`Leaves`](#classForestContainerCpp_1ad3cf3b8c605746c719b1f77c20ca7de2)`(int forest_id,int tree_id)` | 

## Members

#### `public inline  `[`ForestContainerCpp`](#classForestContainerCpp_1a0fef3ffe1672ca77891544f3d0716e6b)`(int num_trees,int output_dimension,bool is_leaf_constant,bool is_exponentiated)` 

#### `public inline  `[`~ForestContainerCpp`](#classForestContainerCpp_1aaf6e33c00c6b6c4838079ea3cbf53674)`()` 

#### `public inline int `[`OutputDimension`](#classForestContainerCpp_1a13c991845a804a8f39b7b05d93a88dc0)`()` 

#### `public inline int `[`NumSamples`](#classForestContainerCpp_1a79d220afd860e3697fb20b4ba0ed6e6e)`()` 

#### `public inline int `[`NumLeavesForest`](#classForestContainerCpp_1aaef9c9d9c0463a71571308981a2929ad)`(int forest_num)` 

#### `public inline double `[`SumLeafSquared`](#classForestContainerCpp_1a7d625fdf2b189349aa9d5c0c86606965)`(int forest_num)` 

#### `public inline void `[`DeleteSample`](#classForestContainerCpp_1aa326d10037e7ce6a141e647b1c8987ef)`(int forest_num)` 

#### `public inline py::array_t< double > `[`Predict`](#classForestContainerCpp_1a2fd9c5aa05154d9c07b49a7dc677f54c)`(`[`ForestDatasetCpp`](#classForestDatasetCpp)` & dataset)` 

#### `public inline py::array_t< double > `[`PredictRaw`](#classForestContainerCpp_1a4c8c2eb1effbddbb358bf1b6c4341d59)`(`[`ForestDatasetCpp`](#classForestDatasetCpp)` & dataset)` 

#### `public inline py::array_t< double > `[`PredictRawSingleForest`](#classForestContainerCpp_1a780d740c0c102a677d611ebf0e476cdb)`(`[`ForestDatasetCpp`](#classForestDatasetCpp)` & dataset,int forest_num)` 

#### `public inline py::array_t< double > `[`PredictRawSingleTree`](#classForestContainerCpp_1aa56172c76d74f5a71c3042cf995342e5)`(`[`ForestDatasetCpp`](#classForestDatasetCpp)` & dataset,int forest_num,int tree_num)` 

#### `public inline void `[`SetRootValue`](#classForestContainerCpp_1a1d85e6b963eeb042dcdea70c47f45d3f)`(int forest_num,double leaf_value)` 

#### `public inline void `[`SetRootVector`](#classForestContainerCpp_1a492b80b03c79bfa94d59c7de11303abd)`(int forest_num,py::array_t< double > & leaf_vector,int leaf_size)` 

#### `public inline void `[`InitializeRootValue`](#classForestContainerCpp_1a4715522f9b93610451cb792aee74c15f)`(double val)` 

#### `public inline void `[`InitializeRootVector`](#classForestContainerCpp_1a650ae9edb6785705969fe8d9266cd588)`(std::vector< double > vals)` 

#### `public void `[`AdjustResidual`](#classForestContainerCpp_1a1ef71ac20bff3ae308a8daff78da06f8)`(`[`ForestDatasetCpp`](#classForestDatasetCpp)` & dataset,`[`ResidualCpp`](#classResidualCpp)` & residual,`[`ForestSamplerCpp`](#classForestSamplerCpp)` & sampler,bool requires_basis,int forest_num,bool add)` 

#### `public inline void `[`SaveToJsonFile`](#classForestContainerCpp_1a30841ef6d674959e412aec7d677f58e8)`(std::string json_filename)` 

#### `public inline void `[`LoadFromJsonFile`](#classForestContainerCpp_1a1169f0e3c9f2f33fca6da0fd61820c0f)`(std::string json_filename)` 

#### `public void `[`LoadFromJson`](#classForestContainerCpp_1adce3d8dd9ca9866e06cc7cefb11ac010)`(`[`JsonCpp`](#classJsonCpp)` & json,std::string forest_label)` 

#### `public inline std::string `[`DumpJsonString`](#classForestContainerCpp_1a78b5cee874333c52d7b0ca5d9af4da31)`()` 

#### `public inline void `[`LoadFromJsonString`](#classForestContainerCpp_1a8325daf220502cf275c2e83681d40ed9)`(std::string & json_string)` 

#### `public inline StochTree::ForestContainer * `[`GetContainer`](#classForestContainerCpp_1a890e6d02f416b973d79ef4d847b2bae4)`()` 

#### `public inline StochTree::TreeEnsemble * `[`GetForest`](#classForestContainerCpp_1acea2c4d74677584b9c0fb35bcdbcf0b5)`(int i)` 

#### `public inline nlohmann::json `[`ToJson`](#classForestContainerCpp_1aedc3756fab2320ff704e507ed4229766)`()` 

#### `public inline void `[`AddSampleValue`](#classForestContainerCpp_1ab9ef774f9d03be1b6027e77c9a87801f)`(double leaf_value)` 

#### `public inline void `[`AddSampleVector`](#classForestContainerCpp_1a614daa8ea9cbee47b6f5582874bd32bb)`(py::array_t< double > leaf_vector)` 

#### `public inline void `[`AddNumericSplitVector`](#classForestContainerCpp_1ae5c5e5444d988e72d097c965b876324c)`(int forest_num,int tree_num,int leaf_num,int feature_num,double split_threshold,py::array_t< double > left_leaf_vector,py::array_t< double > right_leaf_vector)` 

#### `public inline void `[`AddNumericSplitValue`](#classForestContainerCpp_1ab898857480955a868d0d356f2e534ae8)`(int forest_num,int tree_num,int leaf_num,int feature_num,double split_threshold,double left_leaf_value,double right_leaf_value)` 

#### `public inline py::array_t< int > `[`GetTreeLeaves`](#classForestContainerCpp_1a0c2a1ea7f43b72e9fd88a8bb6aaaa638)`(int forest_num,int tree_num)` 

#### `public inline py::array_t< int > `[`GetTreeSplitCounts`](#classForestContainerCpp_1a28b6eecc84b861ca77558cf99d99274d)`(int forest_num,int tree_num,int num_features)` 

#### `public inline py::array_t< int > `[`GetForestSplitCounts`](#classForestContainerCpp_1a5243383cf3ad209cfca700ec1bf2fc7f)`(int forest_num,int num_features)` 

#### `public inline py::array_t< int > `[`GetOverallSplitCounts`](#classForestContainerCpp_1ac937d908979e4aebef100ab28dab2bc0)`(int num_features)` 

#### `public inline py::array_t< int > `[`GetGranularSplitCounts`](#classForestContainerCpp_1af3879b88e50f645bf6f97c1fb360de75)`(int num_features)` 

#### `public inline bool `[`IsLeafNode`](#classForestContainerCpp_1a37e496b5c0caa7a0420e073607d32fa0)`(int forest_id,int tree_id,int node_id)` 

#### `public inline bool `[`IsNumericSplitNode`](#classForestContainerCpp_1a86154e0a0f794637a748d62cdd3b662a)`(int forest_id,int tree_id,int node_id)` 

#### `public inline bool `[`IsCategoricalSplitNode`](#classForestContainerCpp_1a0f542f3cca9b87a72dde44910db5d27f)`(int forest_id,int tree_id,int node_id)` 

#### `public inline int `[`ParentNode`](#classForestContainerCpp_1a4064dfbf5232aee6fd80c8b86774eee1)`(int forest_id,int tree_id,int node_id)` 

#### `public inline int `[`LeftChildNode`](#classForestContainerCpp_1a8d529a702c1ca97266bb72f05eda37be)`(int forest_id,int tree_id,int node_id)` 

#### `public inline int `[`RightChildNode`](#classForestContainerCpp_1ac7950e8703636f8bb235fe75dd960265)`(int forest_id,int tree_id,int node_id)` 

#### `public inline int `[`SplitIndex`](#classForestContainerCpp_1a7dd8e6e0282043920a503581e9b43cd3)`(int forest_id,int tree_id,int node_id)` 

#### `public inline int `[`NodeDepth`](#classForestContainerCpp_1ae73b1c0fdc9ab3a3c30c31c2e4b7cb9a)`(int forest_id,int tree_id,int node_id)` 

#### `public inline double `[`SplitThreshold`](#classForestContainerCpp_1a4bac1c1cdd1a56bdfff32cb0ff576142)`(int forest_id,int tree_id,int node_id)` 

#### `public inline py::array_t< int > `[`SplitCategories`](#classForestContainerCpp_1ab895beadb6d57f7411d06646858c5d04)`(int forest_id,int tree_id,int node_id)` 

#### `public inline py::array_t< double > `[`NodeLeafValues`](#classForestContainerCpp_1a19e1ec1cf34b3dd0e5fd8dafd8ebbdcd)`(int forest_id,int tree_id,int node_id)` 

#### `public inline int `[`NumNodes`](#classForestContainerCpp_1ad456f4a52d2cef77cf72939e992ebd3b)`(int forest_id,int tree_id)` 

#### `public inline int `[`NumLeaves`](#classForestContainerCpp_1a5e567f2b6c4291bc061358616c259de0)`(int forest_id,int tree_id)` 

#### `public inline int `[`NumLeafParents`](#classForestContainerCpp_1a1bc9fb5b355a50d8439dd5a46a7da17e)`(int forest_id,int tree_id)` 

#### `public inline int `[`NumSplitNodes`](#classForestContainerCpp_1a4a97cc11868360dd617236319dec49f8)`(int forest_id,int tree_id)` 

#### `public inline py::array_t< int > `[`Nodes`](#classForestContainerCpp_1aa85b1490e3b552d9b60e9ffcf40b282d)`(int forest_id,int tree_id)` 

#### `public inline py::array_t< int > `[`Leaves`](#classForestContainerCpp_1ad3cf3b8c605746c719b1f77c20ca7de2)`(int forest_id,int tree_id)` 

