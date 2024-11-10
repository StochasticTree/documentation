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
`public inline int `[`NumLeaves`](#classForestContainerCpp_1abcf447da6b4fa02603baa19033073fe0)`(int forest_num)` | 
`public inline double `[`SumLeafSquared`](#classForestContainerCpp_1a7d625fdf2b189349aa9d5c0c86606965)`(int forest_num)` | 
`public inline py::array_t< double > `[`Predict`](#classForestContainerCpp_1a2db2e6b954f08a94cd1eb6119f2ee768)`(`[`ForestDatasetCpp`](#classForestDatasetCpp)` & dataset)` | 
`public inline py::array_t< double > `[`PredictRaw`](#classForestContainerCpp_1a7571c4ffe69a319360e485b697a5ba12)`(`[`ForestDatasetCpp`](#classForestDatasetCpp)` & dataset)` | 
`public inline py::array_t< double > `[`PredictRawSingleForest`](#classForestContainerCpp_1abb59e21562dd76e6eaf467f443ca8eb9)`(`[`ForestDatasetCpp`](#classForestDatasetCpp)` & dataset,int forest_num)` | 
`public inline py::array_t< double > `[`PredictRawSingleTree`](#classForestContainerCpp_1ae633f36e5088076fc625bc8e06a7b211)`(`[`ForestDatasetCpp`](#classForestDatasetCpp)` & dataset,int forest_num,int tree_num)` | 
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
`public inline StochTree::ForestContainer * `[`GetContainer`](#classForestContainerCpp_1a56e7247fcef3f4ff370f7ab50e092d0a)`()` | 
`public inline StochTree::TreeEnsemble * `[`GetForest`](#classForestContainerCpp_1afca04cd37b2973e41f5bbf529e61946c)`(int i)` | 
`public inline nlohmann::json `[`ToJson`](#classForestContainerCpp_1aedc3756fab2320ff704e507ed4229766)`()` | 
`public inline void `[`AddSampleValue`](#classForestContainerCpp_1ab9ef774f9d03be1b6027e77c9a87801f)`(double leaf_value)` | 
`public inline void `[`AddSampleVector`](#classForestContainerCpp_1a614daa8ea9cbee47b6f5582874bd32bb)`(py::array_t< double > leaf_vector)` | 
`public inline void `[`AddNumericSplitVector`](#classForestContainerCpp_1ae5c5e5444d988e72d097c965b876324c)`(int forest_num,int tree_num,int leaf_num,int feature_num,double split_threshold,py::array_t< double > left_leaf_vector,py::array_t< double > right_leaf_vector)` | 
`public inline void `[`AddNumericSplitValue`](#classForestContainerCpp_1ab898857480955a868d0d356f2e534ae8)`(int forest_num,int tree_num,int leaf_num,int feature_num,double split_threshold,double left_leaf_value,double right_leaf_value)` | 
`public inline py::array_t< int > `[`GetTreeLeaves`](#classForestContainerCpp_1a146de93a75e64e18ce721c145f684207)`(int forest_num,int tree_num)` | 
`public inline py::array_t< int > `[`GetTreeSplitCounts`](#classForestContainerCpp_1a8377a17e8b4f27523775130849f92d8c)`(int forest_num,int tree_num,int num_features)` | 
`public inline py::array_t< int > `[`GetForestSplitCounts`](#classForestContainerCpp_1a2d0a8067ddfb2d3b703307725205f002)`(int forest_num,int num_features)` | 
`public inline py::array_t< int > `[`GetOverallSplitCounts`](#classForestContainerCpp_1a3b2bff3c52a603480ffe77b1671eae61)`(int num_features)` | 
`public inline py::array_t< int > `[`GetGranularSplitCounts`](#classForestContainerCpp_1a64428c5deaaf26733a8d94cd7bd5fb71)`(int num_features)` | 

## Members

#### `public inline  `[`ForestContainerCpp`](#classForestContainerCpp_1a0fef3ffe1672ca77891544f3d0716e6b)`(int num_trees,int output_dimension,bool is_leaf_constant,bool is_exponentiated)` 

#### `public inline  `[`~ForestContainerCpp`](#classForestContainerCpp_1aaf6e33c00c6b6c4838079ea3cbf53674)`()` 

#### `public inline int `[`OutputDimension`](#classForestContainerCpp_1a13c991845a804a8f39b7b05d93a88dc0)`()` 

#### `public inline int `[`NumSamples`](#classForestContainerCpp_1a79d220afd860e3697fb20b4ba0ed6e6e)`()` 

#### `public inline int `[`NumLeaves`](#classForestContainerCpp_1abcf447da6b4fa02603baa19033073fe0)`(int forest_num)` 

#### `public inline double `[`SumLeafSquared`](#classForestContainerCpp_1a7d625fdf2b189349aa9d5c0c86606965)`(int forest_num)` 

#### `public inline py::array_t< double > `[`Predict`](#classForestContainerCpp_1a2db2e6b954f08a94cd1eb6119f2ee768)`(`[`ForestDatasetCpp`](#classForestDatasetCpp)` & dataset)` 

#### `public inline py::array_t< double > `[`PredictRaw`](#classForestContainerCpp_1a7571c4ffe69a319360e485b697a5ba12)`(`[`ForestDatasetCpp`](#classForestDatasetCpp)` & dataset)` 

#### `public inline py::array_t< double > `[`PredictRawSingleForest`](#classForestContainerCpp_1abb59e21562dd76e6eaf467f443ca8eb9)`(`[`ForestDatasetCpp`](#classForestDatasetCpp)` & dataset,int forest_num)` 

#### `public inline py::array_t< double > `[`PredictRawSingleTree`](#classForestContainerCpp_1ae633f36e5088076fc625bc8e06a7b211)`(`[`ForestDatasetCpp`](#classForestDatasetCpp)` & dataset,int forest_num,int tree_num)` 

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

#### `public inline StochTree::ForestContainer * `[`GetContainer`](#classForestContainerCpp_1a56e7247fcef3f4ff370f7ab50e092d0a)`()` 

#### `public inline StochTree::TreeEnsemble * `[`GetForest`](#classForestContainerCpp_1afca04cd37b2973e41f5bbf529e61946c)`(int i)` 

#### `public inline nlohmann::json `[`ToJson`](#classForestContainerCpp_1aedc3756fab2320ff704e507ed4229766)`()` 

#### `public inline void `[`AddSampleValue`](#classForestContainerCpp_1ab9ef774f9d03be1b6027e77c9a87801f)`(double leaf_value)` 

#### `public inline void `[`AddSampleVector`](#classForestContainerCpp_1a614daa8ea9cbee47b6f5582874bd32bb)`(py::array_t< double > leaf_vector)` 

#### `public inline void `[`AddNumericSplitVector`](#classForestContainerCpp_1ae5c5e5444d988e72d097c965b876324c)`(int forest_num,int tree_num,int leaf_num,int feature_num,double split_threshold,py::array_t< double > left_leaf_vector,py::array_t< double > right_leaf_vector)` 

#### `public inline void `[`AddNumericSplitValue`](#classForestContainerCpp_1ab898857480955a868d0d356f2e534ae8)`(int forest_num,int tree_num,int leaf_num,int feature_num,double split_threshold,double left_leaf_value,double right_leaf_value)` 

#### `public inline py::array_t< int > `[`GetTreeLeaves`](#classForestContainerCpp_1a146de93a75e64e18ce721c145f684207)`(int forest_num,int tree_num)` 

#### `public inline py::array_t< int > `[`GetTreeSplitCounts`](#classForestContainerCpp_1a8377a17e8b4f27523775130849f92d8c)`(int forest_num,int tree_num,int num_features)` 

#### `public inline py::array_t< int > `[`GetForestSplitCounts`](#classForestContainerCpp_1a2d0a8067ddfb2d3b703307725205f002)`(int forest_num,int num_features)` 

#### `public inline py::array_t< int > `[`GetOverallSplitCounts`](#classForestContainerCpp_1a3b2bff3c52a603480ffe77b1671eae61)`(int num_features)` 

#### `public inline py::array_t< int > `[`GetGranularSplitCounts`](#classForestContainerCpp_1a64428c5deaaf26733a8d94cd7bd5fb71)`(int num_features)` 

