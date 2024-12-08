---
title: namespace `StochTree`
---

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
`public std::vector< std::string > `[`ReadKLineFromFile`](#namespaceStochTree_1ab4d25456f1457e33bc011d0ac619cbc6)`(const char * filename,bool header,int k)`            | 
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

#### `public std::vector< std::string > `[`ReadKLineFromFile`](#namespaceStochTree_1ab4d25456f1457e33bc011d0ac619cbc6)`(const char * filename,bool header,int k)` 

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

