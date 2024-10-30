# Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`namespace `[`StochTree`](#namespaceStochTree) | Copyright (c) 2024 by stochtree authors
`class `[`ForestContainerCpp`](#classForestContainerCpp) | 
`class `[`ForestDatasetCpp`](#classForestDatasetCpp) | 
`class `[`ForestSamplerCpp`](#classForestSamplerCpp) | 
`class `[`GlobalVarianceModelCpp`](#classGlobalVarianceModelCpp) | 
`class `[`JsonCpp`](#classJsonCpp) | 
`class `[`LeafVarianceModelCpp`](#classLeafVarianceModelCpp) | 
`class `[`ResidualCpp`](#classResidualCpp) | 
`class `[`RngCpp`](#classRngCpp) | 

# namespace `StochTree` 

Copyright (c) 2024 by stochtree authors

Copyright (c) 2018 Microsoft Corporation. All rights reserved. Licensed under the MIT License. See LICENSE file in the project root for license information.

Copyright (c) 2016 Microsoft Corporation. All rights reserved. Licensed under the MIT License. See LICENSE file in the project root for license information.

Copyright (c) 2024 stochtree authors

Inspired by the design of the tree in the xgboost and treelite package, both released under the Apache license with the following copyright: Copyright 2015-2023 by XGBoost Contributors Copyright 2017-2021 by [treelite] Contributors

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`enum `[`DataType`](#namespaceStochTree_1aadac066fad287a876d82d215034ddece)            | 
`public void `[`LoadData`](#namespaceStochTree_1a79b3e91f2279b0faa67b197d9bebe364)`(double * data_ptr,int num_row,int num_col,bool is_row_major,Eigen::MatrixXd & data_matrix)`            | 
`public void `[`LoadData`](#namespaceStochTree_1a37009d39fc8c804523961c8437794be2)`(double * data_ptr,int num_row,Eigen::VectorXd & data_vector)`            | 
`public void `[`GetStatistic`](#namespaceStochTree_1adadf702449bc25e53e4c87dd281f6c16)`(const char * str,int * comma_cnt,int * tab_cnt,int * colon_cnt)`            | 
`public int `[`GetLabelIdxForLibsvm`](#namespaceStochTree_1a441e9253ebe4a33d2269a09464a9adc3)`(const std::string & str,int num_features,int label_idx)`            | 
`public int `[`GetLabelIdxForTSV`](#namespaceStochTree_1aaab0b5a0c1e3a110b07d583a31ef0204)`(const std::string & str,int num_features,int label_idx)`            | 
`public int `[`GetLabelIdxForCSV`](#namespaceStochTree_1ae848b1ac95793c76ca4ed0da9b0d0c68)`(const std::string & str,int num_features,int label_idx)`            | 
`public void `[`GetLine`](#namespaceStochTree_1a42736434dc1da3b939c67f1d18703ae6)`(std::stringstream * ss,std::string * line,const VirtualFileReader * reader,std::vector< char > * buffer,size_t buffer_size)`            | 
`public std::vector< std::string > `[`ReadKLineFromFile`](#namespaceStochTree_1ad0d56e7e54c33c79beb8b8c6ddd25c5b)`(const char * filename,bool header,int k)`            | 
`public int `[`GetNumColFromLIBSVMFile`](#namespaceStochTree_1a73eb7b1b4cbc5dc88be3454e5e9fcfbf)`(const char * filename,bool header)`            | 
`public DataType `[`GetDataType`](#namespaceStochTree_1a13ee5cdb09aa6e4fcab6b5d46653e4e4)`(const char * filename,bool header,const std::vector< std::string > & lines,int * num_col)`            | 
`public void `[`TreeNodeVectorsToJson`](#namespaceStochTree_1ab98c941b48d9e2d5688e0cc92a53f0cc)`(json & obj,Tree * tree)`            | 
`public void `[`MultivariateLeafVectorToJson`](#namespaceStochTree_1ac61d620ff7b2527c0f1027277202d06f)`(json & obj,Tree * tree)`            | 
`public void `[`SplitCategoryVectorToJson`](#namespaceStochTree_1aa0f0949f876dba5db4ace80f8173394a)`(json & obj,Tree * tree)`            | 
`public void `[`NodeListsToJson`](#namespaceStochTree_1a529f34e95318a5e2786f54a44e18d2af)`(json & obj,Tree * tree)`            | 
`public void `[`JsonToTreeNodeVectors`](#namespaceStochTree_1afb228b4aafb891869faf5382451e5720)`(const json & tree_json,Tree * tree)`            | 
`public void `[`JsonToMultivariateLeafVector`](#namespaceStochTree_1a76dca66692932497995dd1cf74ba611e)`(const json & tree_json,Tree * tree)`            | 
`public void `[`JsonToSplitCategoryVector`](#namespaceStochTree_1a859fbb7cd257d38c26e50f5684a1a7f3)`(const json & tree_json,Tree * tree)`            | 
`public void `[`JsonToNodeLists`](#namespaceStochTree_1a04d09843b9c34aad2f6a9dbeb3babbfe)`(const json & tree_json,Tree * tree)`            | 
`struct `[`StochTree::LocalFile`](#structStochTree_1_1LocalFile) | 

## Members

#### `enum `[`DataType`](#namespaceStochTree_1aadac066fad287a876d82d215034ddece) 

 Values                         | Descriptions                                
--------------------------------|---------------------------------------------
INVALID            | 
CSV            | 
TSV            | 
LIBSVM            | 

#### `public void `[`LoadData`](#namespaceStochTree_1a79b3e91f2279b0faa67b197d9bebe364)`(double * data_ptr,int num_row,int num_col,bool is_row_major,Eigen::MatrixXd & data_matrix)` 

#### `public void `[`LoadData`](#namespaceStochTree_1a37009d39fc8c804523961c8437794be2)`(double * data_ptr,int num_row,Eigen::VectorXd & data_vector)` 

#### `public void `[`GetStatistic`](#namespaceStochTree_1adadf702449bc25e53e4c87dd281f6c16)`(const char * str,int * comma_cnt,int * tab_cnt,int * colon_cnt)` 

#### `public int `[`GetLabelIdxForLibsvm`](#namespaceStochTree_1a441e9253ebe4a33d2269a09464a9adc3)`(const std::string & str,int num_features,int label_idx)` 

#### `public int `[`GetLabelIdxForTSV`](#namespaceStochTree_1aaab0b5a0c1e3a110b07d583a31ef0204)`(const std::string & str,int num_features,int label_idx)` 

#### `public int `[`GetLabelIdxForCSV`](#namespaceStochTree_1ae848b1ac95793c76ca4ed0da9b0d0c68)`(const std::string & str,int num_features,int label_idx)` 

#### `public void `[`GetLine`](#namespaceStochTree_1a42736434dc1da3b939c67f1d18703ae6)`(std::stringstream * ss,std::string * line,const VirtualFileReader * reader,std::vector< char > * buffer,size_t buffer_size)` 

#### `public std::vector< std::string > `[`ReadKLineFromFile`](#namespaceStochTree_1ad0d56e7e54c33c79beb8b8c6ddd25c5b)`(const char * filename,bool header,int k)` 

#### `public int `[`GetNumColFromLIBSVMFile`](#namespaceStochTree_1a73eb7b1b4cbc5dc88be3454e5e9fcfbf)`(const char * filename,bool header)` 

#### `public DataType `[`GetDataType`](#namespaceStochTree_1a13ee5cdb09aa6e4fcab6b5d46653e4e4)`(const char * filename,bool header,const std::vector< std::string > & lines,int * num_col)` 

#### `public void `[`TreeNodeVectorsToJson`](#namespaceStochTree_1ab98c941b48d9e2d5688e0cc92a53f0cc)`(json & obj,Tree * tree)` 

#### `public void `[`MultivariateLeafVectorToJson`](#namespaceStochTree_1ac61d620ff7b2527c0f1027277202d06f)`(json & obj,Tree * tree)` 

#### `public void `[`SplitCategoryVectorToJson`](#namespaceStochTree_1aa0f0949f876dba5db4ace80f8173394a)`(json & obj,Tree * tree)` 

#### `public void `[`NodeListsToJson`](#namespaceStochTree_1a529f34e95318a5e2786f54a44e18d2af)`(json & obj,Tree * tree)` 

#### `public void `[`JsonToTreeNodeVectors`](#namespaceStochTree_1afb228b4aafb891869faf5382451e5720)`(const json & tree_json,Tree * tree)` 

#### `public void `[`JsonToMultivariateLeafVector`](#namespaceStochTree_1a76dca66692932497995dd1cf74ba611e)`(const json & tree_json,Tree * tree)` 

#### `public void `[`JsonToSplitCategoryVector`](#namespaceStochTree_1a859fbb7cd257d38c26e50f5684a1a7f3)`(const json & tree_json,Tree * tree)` 

#### `public void `[`JsonToNodeLists`](#namespaceStochTree_1a04d09843b9c34aad2f6a9dbeb3babbfe)`(const json & tree_json,Tree * tree)` 

# struct `StochTree::LocalFile` 

```
struct StochTree::LocalFile
  : public VirtualFileReader
  : public VirtualFileWriter
```  

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public inline  `[`LocalFile`](#structStochTree_1_1LocalFile_1a2cbf1943e92e22307da4dd8855f5ac16)`(const std::string & filename,const std::string & mode)` | 
`public inline virtual  `[`~LocalFile`](#structStochTree_1_1LocalFile_1a3080edd46769dfe884815ed681bc3840)`()` | 
`public inline bool `[`Init`](#structStochTree_1_1LocalFile_1a57fb1a30b8065b0174488f083855feb8)`()` | 
`public inline bool `[`Exists`](#structStochTree_1_1LocalFile_1a2aa2049991077e83e2bb068c5c665df0)`() const` | 
`public inline size_t `[`Read`](#structStochTree_1_1LocalFile_1a30d0e68e91249a179549a7991f049011)`(void * buffer,size_t bytes) const` | 
`public inline size_t `[`Write`](#structStochTree_1_1LocalFile_1af79f901f74294bd870bcd80b92fb4f08)`(const void * buffer,size_t bytes)` | 

## Members

#### `public inline  `[`LocalFile`](#structStochTree_1_1LocalFile_1a2cbf1943e92e22307da4dd8855f5ac16)`(const std::string & filename,const std::string & mode)` 

#### `public inline virtual  `[`~LocalFile`](#structStochTree_1_1LocalFile_1a3080edd46769dfe884815ed681bc3840)`()` 

#### `public inline bool `[`Init`](#structStochTree_1_1LocalFile_1a57fb1a30b8065b0174488f083855feb8)`()` 

#### `public inline bool `[`Exists`](#structStochTree_1_1LocalFile_1a2aa2049991077e83e2bb068c5c665df0)`() const` 

#### `public inline size_t `[`Read`](#structStochTree_1_1LocalFile_1a30d0e68e91249a179549a7991f049011)`(void * buffer,size_t bytes) const` 

#### `public inline size_t `[`Write`](#structStochTree_1_1LocalFile_1af79f901f74294bd870bcd80b92fb4f08)`(const void * buffer,size_t bytes)` 

# class `ForestContainerCpp` 

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public inline  `[`ForestContainerCpp`](#classForestContainerCpp_1a0fef3ffe1672ca77891544f3d0716e6b)`(int num_trees,int output_dimension,bool is_leaf_constant,bool is_exponentiated)` | 
`public inline  `[`~ForestContainerCpp`](#classForestContainerCpp_1aaf6e33c00c6b6c4838079ea3cbf53674)`()` | 
`public inline int `[`OutputDimension`](#classForestContainerCpp_1a13c991845a804a8f39b7b05d93a88dc0)`()` | 
`public inline int `[`NumSamples`](#classForestContainerCpp_1a79d220afd860e3697fb20b4ba0ed6e6e)`()` | 
`public inline py::array_t< double > `[`Predict`](#classForestContainerCpp_1a2db2e6b954f08a94cd1eb6119f2ee768)`(`[`ForestDatasetCpp`](#classForestDatasetCpp)` & dataset)` | 
`public inline py::array_t< double > `[`PredictRaw`](#classForestContainerCpp_1a7571c4ffe69a319360e485b697a5ba12)`(`[`ForestDatasetCpp`](#classForestDatasetCpp)` & dataset)` | 
`public inline py::array_t< double > `[`PredictRawSingleForest`](#classForestContainerCpp_1abb59e21562dd76e6eaf467f443ca8eb9)`(`[`ForestDatasetCpp`](#classForestDatasetCpp)` & dataset,int forest_num)` | 
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

#### `public inline py::array_t< double > `[`Predict`](#classForestContainerCpp_1a2db2e6b954f08a94cd1eb6119f2ee768)`(`[`ForestDatasetCpp`](#classForestDatasetCpp)` & dataset)` 

#### `public inline py::array_t< double > `[`PredictRaw`](#classForestContainerCpp_1a7571c4ffe69a319360e485b697a5ba12)`(`[`ForestDatasetCpp`](#classForestDatasetCpp)` & dataset)` 

#### `public inline py::array_t< double > `[`PredictRawSingleForest`](#classForestContainerCpp_1abb59e21562dd76e6eaf467f443ca8eb9)`(`[`ForestDatasetCpp`](#classForestDatasetCpp)` & dataset,int forest_num)` 

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

# class `ForestDatasetCpp` 

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public inline  `[`ForestDatasetCpp`](#classForestDatasetCpp_1a6f80db6df23042846f8b20f91397e73f)`()` | 
`public inline  `[`~ForestDatasetCpp`](#classForestDatasetCpp_1a4be2a60c8fe950bb9e23b9d6f6e945f9)`()` | 
`public inline void `[`AddCovariates`](#classForestDatasetCpp_1ad8924778d19e4d780b3762e9af1878fe)`(py::array_t< double > covariate_matrix,data_size_t num_row,int num_col,bool row_major)` | 
`public inline void `[`AddBasis`](#classForestDatasetCpp_1a22439774d7add849768680a0dfdc03d7)`(py::array_t< double > basis_matrix,data_size_t num_row,int num_col,bool row_major)` | 
`public inline void `[`UpdateBasis`](#classForestDatasetCpp_1a41aa7a00787f8ddc1897f656884c3582)`(py::array_t< double > basis_matrix,data_size_t num_row,int num_col,bool row_major)` | 
`public inline void `[`AddVarianceWeights`](#classForestDatasetCpp_1ac8d722192ac8d8b36434deb2892d5db2)`(py::array_t< double > weight_vector,data_size_t num_row)` | 
`public inline data_size_t `[`NumRows`](#classForestDatasetCpp_1a8b11609225839609d6bcbc05e8e5a81e)`()` | 
`public inline StochTree::ForestDataset * `[`GetDataset`](#classForestDatasetCpp_1a931778b318957e9d7da00a6d4710132b)`()` | 

## Members

#### `public inline  `[`ForestDatasetCpp`](#classForestDatasetCpp_1a6f80db6df23042846f8b20f91397e73f)`()` 

#### `public inline  `[`~ForestDatasetCpp`](#classForestDatasetCpp_1a4be2a60c8fe950bb9e23b9d6f6e945f9)`()` 

#### `public inline void `[`AddCovariates`](#classForestDatasetCpp_1ad8924778d19e4d780b3762e9af1878fe)`(py::array_t< double > covariate_matrix,data_size_t num_row,int num_col,bool row_major)` 

#### `public inline void `[`AddBasis`](#classForestDatasetCpp_1a22439774d7add849768680a0dfdc03d7)`(py::array_t< double > basis_matrix,data_size_t num_row,int num_col,bool row_major)` 

#### `public inline void `[`UpdateBasis`](#classForestDatasetCpp_1a41aa7a00787f8ddc1897f656884c3582)`(py::array_t< double > basis_matrix,data_size_t num_row,int num_col,bool row_major)` 

#### `public inline void `[`AddVarianceWeights`](#classForestDatasetCpp_1ac8d722192ac8d8b36434deb2892d5db2)`(py::array_t< double > weight_vector,data_size_t num_row)` 

#### `public inline data_size_t `[`NumRows`](#classForestDatasetCpp_1a8b11609225839609d6bcbc05e8e5a81e)`()` 

#### `public inline StochTree::ForestDataset * `[`GetDataset`](#classForestDatasetCpp_1a931778b318957e9d7da00a6d4710132b)`()` 

# class `ForestSamplerCpp` 

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public inline  `[`ForestSamplerCpp`](#classForestSamplerCpp_1a716e2183d9ee5577e19e33b7b6221d93)`(`[`ForestDatasetCpp`](#classForestDatasetCpp)` & dataset,py::array_t< int > feature_types,int num_trees,data_size_t num_obs,double alpha,double beta,int min_samples_leaf,int max_depth)` | 
`public inline  `[`~ForestSamplerCpp`](#classForestSamplerCpp_1a6ebd4b2b5b43fc2efa43bcf67fe611e3)`()` | 
`public inline StochTree::ForestTracker * `[`GetTracker`](#classForestSamplerCpp_1ac01993c23e40d2519a2cd554982c0c03)`()` | 
`public inline void `[`SampleOneIteration`](#classForestSamplerCpp_1a897b657f4df5049c1839e1b729d01b05)`(`[`ForestContainerCpp`](#classForestContainerCpp)` & forest_samples,`[`ForestDatasetCpp`](#classForestDatasetCpp)` & dataset,`[`ResidualCpp`](#classResidualCpp)` & residual,`[`RngCpp`](#classRngCpp)` & rng,py::array_t< int > feature_types,int cutpoint_grid_size,py::array_t< double > leaf_model_scale_input,py::array_t< double > variable_weights,double a_forest,double b_forest,double global_variance,int leaf_model_int,bool gfr,bool pre_initialized)` | 
`public inline void `[`InitializeForestModel`](#classForestSamplerCpp_1ab04639d7daaadd32f3ba71aba1d7cbed)`(`[`ForestDatasetCpp`](#classForestDatasetCpp)` & dataset,`[`ResidualCpp`](#classResidualCpp)` & residual,`[`ForestContainerCpp`](#classForestContainerCpp)` & forest_samples,int leaf_model_int,py::array_t< double > initial_values)` | 
`public inline void `[`PropagateBasisUpdate`](#classForestSamplerCpp_1aac739a6f76c718a65e9359565da9be1b)`(`[`ForestDatasetCpp`](#classForestDatasetCpp)` & dataset,`[`ResidualCpp`](#classResidualCpp)` & residual,`[`ForestContainerCpp`](#classForestContainerCpp)` & forest_samples,int forest_num)` | 
`public inline void `[`PropagateResidualUpdate`](#classForestSamplerCpp_1af17503801ae8a23510d7ed33ec663958)`(`[`ResidualCpp`](#classResidualCpp)` & residual)` | 

## Members

#### `public inline  `[`ForestSamplerCpp`](#classForestSamplerCpp_1a716e2183d9ee5577e19e33b7b6221d93)`(`[`ForestDatasetCpp`](#classForestDatasetCpp)` & dataset,py::array_t< int > feature_types,int num_trees,data_size_t num_obs,double alpha,double beta,int min_samples_leaf,int max_depth)` 

#### `public inline  `[`~ForestSamplerCpp`](#classForestSamplerCpp_1a6ebd4b2b5b43fc2efa43bcf67fe611e3)`()` 

#### `public inline StochTree::ForestTracker * `[`GetTracker`](#classForestSamplerCpp_1ac01993c23e40d2519a2cd554982c0c03)`()` 

#### `public inline void `[`SampleOneIteration`](#classForestSamplerCpp_1a897b657f4df5049c1839e1b729d01b05)`(`[`ForestContainerCpp`](#classForestContainerCpp)` & forest_samples,`[`ForestDatasetCpp`](#classForestDatasetCpp)` & dataset,`[`ResidualCpp`](#classResidualCpp)` & residual,`[`RngCpp`](#classRngCpp)` & rng,py::array_t< int > feature_types,int cutpoint_grid_size,py::array_t< double > leaf_model_scale_input,py::array_t< double > variable_weights,double a_forest,double b_forest,double global_variance,int leaf_model_int,bool gfr,bool pre_initialized)` 

#### `public inline void `[`InitializeForestModel`](#classForestSamplerCpp_1ab04639d7daaadd32f3ba71aba1d7cbed)`(`[`ForestDatasetCpp`](#classForestDatasetCpp)` & dataset,`[`ResidualCpp`](#classResidualCpp)` & residual,`[`ForestContainerCpp`](#classForestContainerCpp)` & forest_samples,int leaf_model_int,py::array_t< double > initial_values)` 

#### `public inline void `[`PropagateBasisUpdate`](#classForestSamplerCpp_1aac739a6f76c718a65e9359565da9be1b)`(`[`ForestDatasetCpp`](#classForestDatasetCpp)` & dataset,`[`ResidualCpp`](#classResidualCpp)` & residual,`[`ForestContainerCpp`](#classForestContainerCpp)` & forest_samples,int forest_num)` 

#### `public inline void `[`PropagateResidualUpdate`](#classForestSamplerCpp_1af17503801ae8a23510d7ed33ec663958)`(`[`ResidualCpp`](#classResidualCpp)` & residual)` 

# class `GlobalVarianceModelCpp` 

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public inline  `[`GlobalVarianceModelCpp`](#classGlobalVarianceModelCpp_1a5b8f8daf4c15b2c533f399e61cccab08)`()` | 
`public inline  `[`~GlobalVarianceModelCpp`](#classGlobalVarianceModelCpp_1a96886587c2c8b2d4cd9d8e2f5177ab83)`()` | 
`public inline double `[`SampleOneIteration`](#classGlobalVarianceModelCpp_1a9a867b460dd2a3291d392c3a61ad524c)`(`[`ResidualCpp`](#classResidualCpp)` & residual,`[`RngCpp`](#classRngCpp)` & rng,double a,double b)` | 

## Members

#### `public inline  `[`GlobalVarianceModelCpp`](#classGlobalVarianceModelCpp_1a5b8f8daf4c15b2c533f399e61cccab08)`()` 

#### `public inline  `[`~GlobalVarianceModelCpp`](#classGlobalVarianceModelCpp_1a96886587c2c8b2d4cd9d8e2f5177ab83)`()` 

#### `public inline double `[`SampleOneIteration`](#classGlobalVarianceModelCpp_1a9a867b460dd2a3291d392c3a61ad524c)`(`[`ResidualCpp`](#classResidualCpp)` & residual,`[`RngCpp`](#classRngCpp)` & rng,double a,double b)` 

# class `JsonCpp` 

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public inline  `[`JsonCpp`](#classJsonCpp_1a6752360f1c4ee58bf2ce97c74c913358)`()` | 
`public inline  `[`~JsonCpp`](#classJsonCpp_1a9a2addd32da5664837830db3d55a6cd8)`()` | 
`public inline void `[`LoadFile`](#classJsonCpp_1ab74bad931397c3c8fea780c1d592f54a)`(std::string filename)` | 
`public inline void `[`SaveFile`](#classJsonCpp_1adaca7db574f603f43f514541ec93c466)`(std::string filename)` | 
`public inline std::string `[`DumpJson`](#classJsonCpp_1a6a7d2af034373a6a04d290410ad8d324)`()` | 
`public inline std::string `[`AddForest`](#classJsonCpp_1a2d3e0410f56f10a4bfc4b4371b5fca80)`(`[`ForestContainerCpp`](#classForestContainerCpp)` & forest_samples)` | 
`public inline void `[`AddDouble`](#classJsonCpp_1a1333ac93e1734bf36880302aed0d3c3e)`(std::string field_name,double field_value)` | 
`public inline void `[`AddDoubleSubfolder`](#classJsonCpp_1ae01fb3ea5ec4488a3bd123f32b2f80e9)`(std::string subfolder_name,std::string field_name,double field_value)` | 
`public inline void `[`AddBool`](#classJsonCpp_1a4450825f6ea4d51542ae09a37dafc474)`(std::string field_name,bool field_value)` | 
`public inline void `[`AddBoolSubfolder`](#classJsonCpp_1a7ec65310666c485b57ca81442674fe52)`(std::string subfolder_name,std::string field_name,bool field_value)` | 
`public inline void `[`AddString`](#classJsonCpp_1a0ffef39433c6218865dabda8195bcc5a)`(std::string field_name,std::string field_value)` | 
`public inline void `[`AddStringSubfolder`](#classJsonCpp_1a96d2033a5c73a82a35a13f45f0f5bdc1)`(std::string subfolder_name,std::string field_name,std::string field_value)` | 
`public inline void `[`AddDoubleVector`](#classJsonCpp_1a9ccf9ffc1405fe11d92742db1decbe41)`(std::string field_name,py::array_t< double > field_vector)` | 
`public inline void `[`AddDoubleVectorSubfolder`](#classJsonCpp_1acfba76184cdb603e53d7f88611d4bc90)`(std::string subfolder_name,std::string field_name,py::array_t< double > field_vector)` | 
`public inline void `[`AddStringVector`](#classJsonCpp_1a8f43c0c42f81d018c4467e2453a0a3bc)`(std::string field_name,std::vector< std::string > & field_vector)` | 
`public inline void `[`AddStringVectorSubfolder`](#classJsonCpp_1adef46c168faa1580336dc4bf359448ed)`(std::string subfolder_name,std::string field_name,std::vector< std::string > & field_vector)` | 
`public inline bool `[`ContainsField`](#classJsonCpp_1a098c6e90264117e48d6aff6f651ce64c)`(std::string field_name)` | 
`public inline bool `[`ContainsFieldSubfolder`](#classJsonCpp_1a388825667d9b67428757b3660e4c4fbe)`(std::string subfolder_name,std::string field_name)` | 
`public inline double `[`ExtractDouble`](#classJsonCpp_1a52e4cbe7868575dff061a92703872046)`(std::string field_name)` | 
`public inline double `[`ExtractDoubleSubfolder`](#classJsonCpp_1a49eb6123e3d647effd3aeaf230597369)`(std::string subfolder_name,std::string field_name)` | 
`public inline bool `[`ExtractBool`](#classJsonCpp_1a009fa243b45e44532970da15459c2fce)`(std::string field_name)` | 
`public inline bool `[`ExtractBoolSubfolder`](#classJsonCpp_1ae040b066fc7c7ae34cc4147b9a60175e)`(std::string subfolder_name,std::string field_name)` | 
`public inline std::string `[`ExtractString`](#classJsonCpp_1ab0b6b218f814bfa9b34e93d5b868386a)`(std::string field_name)` | 
`public inline std::string `[`ExtractStringSubfolder`](#classJsonCpp_1a8654f6e9a42841a88a6309584306ebd2)`(std::string subfolder_name,std::string field_name)` | 
`public inline py::array_t< double > `[`ExtractDoubleVector`](#classJsonCpp_1aa1dae9756f87ce20be18ddf40444740e)`(std::string field_name)` | 
`public inline py::array_t< double > `[`ExtractDoubleVectorSubfolder`](#classJsonCpp_1acb5dbc28a3c8eafad03d9ea7b8416eb6)`(std::string subfolder_name,std::string field_name)` | 
`public inline std::vector< std::string > `[`ExtractStringVector`](#classJsonCpp_1a1e643cadad2cca2d10b6a5fec165320b)`(std::string field_name)` | 
`public inline std::vector< std::string > `[`ExtractStringVectorSubfolder`](#classJsonCpp_1a730ce7e046e63bdc93214bb5c8aee749)`(std::string subfolder_name,std::string field_name)` | 
`public inline nlohmann::json `[`SubsetJsonForest`](#classJsonCpp_1a104498c45cc52bebae67b35e73d2c8d1)`(std::string forest_label)` | 

## Members

#### `public inline  `[`JsonCpp`](#classJsonCpp_1a6752360f1c4ee58bf2ce97c74c913358)`()` 

#### `public inline  `[`~JsonCpp`](#classJsonCpp_1a9a2addd32da5664837830db3d55a6cd8)`()` 

#### `public inline void `[`LoadFile`](#classJsonCpp_1ab74bad931397c3c8fea780c1d592f54a)`(std::string filename)` 

#### `public inline void `[`SaveFile`](#classJsonCpp_1adaca7db574f603f43f514541ec93c466)`(std::string filename)` 

#### `public inline std::string `[`DumpJson`](#classJsonCpp_1a6a7d2af034373a6a04d290410ad8d324)`()` 

#### `public inline std::string `[`AddForest`](#classJsonCpp_1a2d3e0410f56f10a4bfc4b4371b5fca80)`(`[`ForestContainerCpp`](#classForestContainerCpp)` & forest_samples)` 

#### `public inline void `[`AddDouble`](#classJsonCpp_1a1333ac93e1734bf36880302aed0d3c3e)`(std::string field_name,double field_value)` 

#### `public inline void `[`AddDoubleSubfolder`](#classJsonCpp_1ae01fb3ea5ec4488a3bd123f32b2f80e9)`(std::string subfolder_name,std::string field_name,double field_value)` 

#### `public inline void `[`AddBool`](#classJsonCpp_1a4450825f6ea4d51542ae09a37dafc474)`(std::string field_name,bool field_value)` 

#### `public inline void `[`AddBoolSubfolder`](#classJsonCpp_1a7ec65310666c485b57ca81442674fe52)`(std::string subfolder_name,std::string field_name,bool field_value)` 

#### `public inline void `[`AddString`](#classJsonCpp_1a0ffef39433c6218865dabda8195bcc5a)`(std::string field_name,std::string field_value)` 

#### `public inline void `[`AddStringSubfolder`](#classJsonCpp_1a96d2033a5c73a82a35a13f45f0f5bdc1)`(std::string subfolder_name,std::string field_name,std::string field_value)` 

#### `public inline void `[`AddDoubleVector`](#classJsonCpp_1a9ccf9ffc1405fe11d92742db1decbe41)`(std::string field_name,py::array_t< double > field_vector)` 

#### `public inline void `[`AddDoubleVectorSubfolder`](#classJsonCpp_1acfba76184cdb603e53d7f88611d4bc90)`(std::string subfolder_name,std::string field_name,py::array_t< double > field_vector)` 

#### `public inline void `[`AddStringVector`](#classJsonCpp_1a8f43c0c42f81d018c4467e2453a0a3bc)`(std::string field_name,std::vector< std::string > & field_vector)` 

#### `public inline void `[`AddStringVectorSubfolder`](#classJsonCpp_1adef46c168faa1580336dc4bf359448ed)`(std::string subfolder_name,std::string field_name,std::vector< std::string > & field_vector)` 

#### `public inline bool `[`ContainsField`](#classJsonCpp_1a098c6e90264117e48d6aff6f651ce64c)`(std::string field_name)` 

#### `public inline bool `[`ContainsFieldSubfolder`](#classJsonCpp_1a388825667d9b67428757b3660e4c4fbe)`(std::string subfolder_name,std::string field_name)` 

#### `public inline double `[`ExtractDouble`](#classJsonCpp_1a52e4cbe7868575dff061a92703872046)`(std::string field_name)` 

#### `public inline double `[`ExtractDoubleSubfolder`](#classJsonCpp_1a49eb6123e3d647effd3aeaf230597369)`(std::string subfolder_name,std::string field_name)` 

#### `public inline bool `[`ExtractBool`](#classJsonCpp_1a009fa243b45e44532970da15459c2fce)`(std::string field_name)` 

#### `public inline bool `[`ExtractBoolSubfolder`](#classJsonCpp_1ae040b066fc7c7ae34cc4147b9a60175e)`(std::string subfolder_name,std::string field_name)` 

#### `public inline std::string `[`ExtractString`](#classJsonCpp_1ab0b6b218f814bfa9b34e93d5b868386a)`(std::string field_name)` 

#### `public inline std::string `[`ExtractStringSubfolder`](#classJsonCpp_1a8654f6e9a42841a88a6309584306ebd2)`(std::string subfolder_name,std::string field_name)` 

#### `public inline py::array_t< double > `[`ExtractDoubleVector`](#classJsonCpp_1aa1dae9756f87ce20be18ddf40444740e)`(std::string field_name)` 

#### `public inline py::array_t< double > `[`ExtractDoubleVectorSubfolder`](#classJsonCpp_1acb5dbc28a3c8eafad03d9ea7b8416eb6)`(std::string subfolder_name,std::string field_name)` 

#### `public inline std::vector< std::string > `[`ExtractStringVector`](#classJsonCpp_1a1e643cadad2cca2d10b6a5fec165320b)`(std::string field_name)` 

#### `public inline std::vector< std::string > `[`ExtractStringVectorSubfolder`](#classJsonCpp_1a730ce7e046e63bdc93214bb5c8aee749)`(std::string subfolder_name,std::string field_name)` 

#### `public inline nlohmann::json `[`SubsetJsonForest`](#classJsonCpp_1a104498c45cc52bebae67b35e73d2c8d1)`(std::string forest_label)` 

# class `LeafVarianceModelCpp` 

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public inline  `[`LeafVarianceModelCpp`](#classLeafVarianceModelCpp_1a264f72a04372c974cba5df5f9211e47c)`()` | 
`public inline  `[`~LeafVarianceModelCpp`](#classLeafVarianceModelCpp_1aaacec80798b5d3d0de671420700f1256)`()` | 
`public inline double `[`SampleOneIteration`](#classLeafVarianceModelCpp_1aec246504233c4504a927edf4af8cb06c)`(`[`ForestContainerCpp`](#classForestContainerCpp)` & forest_samples,`[`RngCpp`](#classRngCpp)` & rng,double a,double b,int sample_num)` | 

## Members

#### `public inline  `[`LeafVarianceModelCpp`](#classLeafVarianceModelCpp_1a264f72a04372c974cba5df5f9211e47c)`()` 

#### `public inline  `[`~LeafVarianceModelCpp`](#classLeafVarianceModelCpp_1aaacec80798b5d3d0de671420700f1256)`()` 

#### `public inline double `[`SampleOneIteration`](#classLeafVarianceModelCpp_1aec246504233c4504a927edf4af8cb06c)`(`[`ForestContainerCpp`](#classForestContainerCpp)` & forest_samples,`[`RngCpp`](#classRngCpp)` & rng,double a,double b,int sample_num)` 

# class `ResidualCpp` 

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public inline  `[`ResidualCpp`](#classResidualCpp_1adb478fa40a537bcb0cc35cd29eb2ed15)`(py::array_t< double > residual_array,data_size_t num_row)` | 
`public inline  `[`~ResidualCpp`](#classResidualCpp_1aa70f69a386d046c3830a0ef76ff50006)`()` | 
`public inline StochTree::ColumnVector * `[`GetData`](#classResidualCpp_1ae02233f2a241829079206242301c2bee)`()` | 
`public inline py::array_t< double > `[`GetResidualArray`](#classResidualCpp_1abf5c81dc92851ccd58ea1ee82a43860d)`()` | 
`public inline void `[`ReplaceData`](#classResidualCpp_1af7a420603f4a74d951750af1863bef16)`(py::array_t< double > new_vector,data_size_t num_row)` | 

## Members

#### `public inline  `[`ResidualCpp`](#classResidualCpp_1adb478fa40a537bcb0cc35cd29eb2ed15)`(py::array_t< double > residual_array,data_size_t num_row)` 

#### `public inline  `[`~ResidualCpp`](#classResidualCpp_1aa70f69a386d046c3830a0ef76ff50006)`()` 

#### `public inline StochTree::ColumnVector * `[`GetData`](#classResidualCpp_1ae02233f2a241829079206242301c2bee)`()` 

#### `public inline py::array_t< double > `[`GetResidualArray`](#classResidualCpp_1abf5c81dc92851ccd58ea1ee82a43860d)`()` 

#### `public inline void `[`ReplaceData`](#classResidualCpp_1af7a420603f4a74d951750af1863bef16)`(py::array_t< double > new_vector,data_size_t num_row)` 

# class `RngCpp` 

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public inline  `[`RngCpp`](#classRngCpp_1a2c038d51ec10cf984abc17e6a91c4163)`(int random_seed)` | 
`public inline  `[`~RngCpp`](#classRngCpp_1a2595d9b2f18e7ba08733a427fbd7a086)`()` | 
`public inline std::mt19937 * `[`GetRng`](#classRngCpp_1af7234752299bcd0df80684c10a7b745d)`()` | 

## Members

#### `public inline  `[`RngCpp`](#classRngCpp_1a2c038d51ec10cf984abc17e6a91c4163)`(int random_seed)` 

#### `public inline  `[`~RngCpp`](#classRngCpp_1a2595d9b2f18e7ba08733a427fbd7a086)`()` 

#### `public inline std::mt19937 * `[`GetRng`](#classRngCpp_1af7234752299bcd0df80684c10a7b745d)`()` 

Generated by [Moxygen](https://sourcey.com/moxygen)