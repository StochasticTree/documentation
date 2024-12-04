---
title: class `ForestCpp`
---

# class `ForestCpp`

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public inline  `[`ForestCpp`](#classForestCpp_1af28839809ecff0fc02da197c06b78806)`(int num_trees,int output_dimension,bool is_leaf_constant,bool is_exponentiated)` | 
`public inline  `[`~ForestCpp`](#classForestCpp_1ad6c22bca0b09b9f93706cafaad1d2aa6)`()` | 
`public inline int `[`OutputDimension`](#classForestCpp_1a818926ffc1a6f034038d3777069c83c5)`()` | 
`public inline int `[`NumLeavesForest`](#classForestCpp_1a3b0a9646c5513f0006e2314e9ff3cf19)`()` | 
`public inline double `[`SumLeafSquared`](#classForestCpp_1a593c60de74d0bc5ef2665e942eed2c23)`(int forest_num)` | 
`public inline void `[`ResetRoot`](#classForestCpp_1a0db280769720c942d0a0add330184a6d)`()` | 
`public inline void `[`Reset`](#classForestCpp_1ac631efc7efb9c17d9c2824ad15524b1c)`(`[`ForestContainerCpp`](#classForestContainerCpp)` & forest_container,int forest_num)` | 
`public inline py::array_t< double > `[`Predict`](#classForestCpp_1a72bf093162b956ac310b7d613f487562)`(`[`ForestDatasetCpp`](#classForestDatasetCpp)` & dataset)` | 
`public inline py::array_t< double > `[`PredictRaw`](#classForestCpp_1ab7d07a3d5fc821541e1353d8630d7dec)`(`[`ForestDatasetCpp`](#classForestDatasetCpp)` & dataset)` | 
`public inline void `[`SetRootValue`](#classForestCpp_1a84f063c78a37a0ef8cd0273f1c3d231a)`(double leaf_value)` | 
`public inline void `[`SetRootVector`](#classForestCpp_1abc913598e992bedb29e077d445599f32)`(py::array_t< double > & leaf_vector,int leaf_size)` | 
`public void `[`AdjustResidual`](#classForestCpp_1a7746d912c13481a5c99092b3fa0bc71b)`(`[`ForestDatasetCpp`](#classForestDatasetCpp)` & dataset,`[`ResidualCpp`](#classResidualCpp)` & residual,`[`ForestSamplerCpp`](#classForestSamplerCpp)` & sampler,bool requires_basis,bool add)` | 
`public inline StochTree::TreeEnsemble * `[`GetEnsemble`](#classForestCpp_1a9a460c31a55a035d7be41bffd6e3a1e6)`()` | 
`public inline void `[`AddNumericSplitValue`](#classForestCpp_1a54b2db5a367fcc3c6130779de0f08b53)`(int tree_num,int leaf_num,int feature_num,double split_threshold,double left_leaf_value,double right_leaf_value)` | 
`public inline void `[`AddNumericSplitVector`](#classForestCpp_1ae1531429d5bdf13d85752e407924d24a)`(int tree_num,int leaf_num,int feature_num,double split_threshold,py::array_t< double > left_leaf_vector,py::array_t< double > right_leaf_vector)` | 
`public inline py::array_t< int > `[`GetTreeLeaves`](#classForestCpp_1a0c2f05421b96db1e284c5ba0547fd8dc)`(int tree_num)` | 
`public inline py::array_t< int > `[`GetTreeSplitCounts`](#classForestCpp_1a9a02cdc1a69f1d12727c8ac8246fc6bb)`(int tree_num,int num_features)` | 
`public inline py::array_t< int > `[`GetOverallSplitCounts`](#classForestCpp_1aadb6e632d3f9eb20da1c9ce411ed67d0)`(int num_features)` | 
`public inline py::array_t< int > `[`GetGranularSplitCounts`](#classForestCpp_1ac23d794d2baa1c47f3253d1a57da3fa9)`(int num_features)` | 
`public inline bool `[`IsLeafNode`](#classForestCpp_1a1a6f14e5b414a4f2a7f080566ed58271)`(int tree_id,int node_id)` | 
`public inline bool `[`IsNumericSplitNode`](#classForestCpp_1a762f394b82a34274c2a88e9f581e228e)`(int tree_id,int node_id)` | 
`public inline bool `[`IsCategoricalSplitNode`](#classForestCpp_1a4faac08e1de68d8675079d8652aeda78)`(int tree_id,int node_id)` | 
`public inline int `[`ParentNode`](#classForestCpp_1a68a1ed61a92d6b6909c5feaf38e378d9)`(int tree_id,int node_id)` | 
`public inline int `[`LeftChildNode`](#classForestCpp_1a2f03fd7713b18337a98e8ec7e9f1f1c0)`(int tree_id,int node_id)` | 
`public inline int `[`RightChildNode`](#classForestCpp_1ad402941b119ef6bddb59d143b75f0bdf)`(int tree_id,int node_id)` | 
`public inline int `[`SplitIndex`](#classForestCpp_1aa0994a8cf2cafce22b13f20784b3803c)`(int tree_id,int node_id)` | 
`public inline int `[`NodeDepth`](#classForestCpp_1ac5cd5b5b47962d4eac21ed8180633be5)`(int tree_id,int node_id)` | 
`public inline double `[`SplitThreshold`](#classForestCpp_1a2a2c4beba400f9a96119d72e3d9d026a)`(int tree_id,int node_id)` | 
`public inline py::array_t< int > `[`SplitCategories`](#classForestCpp_1a53a8f9b5138f9f04c40cb95e2f7f05e6)`(int tree_id,int node_id)` | 
`public inline py::array_t< double > `[`NodeLeafValues`](#classForestCpp_1ae84fe3c4daa7d43e3117d9c025410b6e)`(int tree_id,int node_id)` | 
`public inline int `[`NumNodes`](#classForestCpp_1a96a5b0a2f4e4eaba91b5ff4429ee38ac)`(int tree_id)` | 
`public inline int `[`NumLeaves`](#classForestCpp_1a9b0394c86703a88f565170c1c91e3bbd)`(int tree_id)` | 
`public inline int `[`NumLeafParents`](#classForestCpp_1a5508ff762921aefda57ba8ca454d435b)`(int tree_id)` | 
`public inline int `[`NumSplitNodes`](#classForestCpp_1a0ac612e1f3e5a9404a5e3ef03e3b384f)`(int tree_id)` | 
`public inline py::array_t< int > `[`Nodes`](#classForestCpp_1a800710c90175da166413f72d24a2e427)`(int tree_id)` | 
`public inline py::array_t< int > `[`Leaves`](#classForestCpp_1a1ff7e0b58124b1911208fd4988f4e193)`(int tree_id)` | 

## Members

#### `public inline  `[`ForestCpp`](#classForestCpp_1af28839809ecff0fc02da197c06b78806)`(int num_trees,int output_dimension,bool is_leaf_constant,bool is_exponentiated)` 

#### `public inline  `[`~ForestCpp`](#classForestCpp_1ad6c22bca0b09b9f93706cafaad1d2aa6)`()` 

#### `public inline int `[`OutputDimension`](#classForestCpp_1a818926ffc1a6f034038d3777069c83c5)`()` 

#### `public inline int `[`NumLeavesForest`](#classForestCpp_1a3b0a9646c5513f0006e2314e9ff3cf19)`()` 

#### `public inline double `[`SumLeafSquared`](#classForestCpp_1a593c60de74d0bc5ef2665e942eed2c23)`(int forest_num)` 

#### `public inline void `[`ResetRoot`](#classForestCpp_1a0db280769720c942d0a0add330184a6d)`()` 

#### `public inline void `[`Reset`](#classForestCpp_1ac631efc7efb9c17d9c2824ad15524b1c)`(`[`ForestContainerCpp`](#classForestContainerCpp)` & forest_container,int forest_num)` 

#### `public inline py::array_t< double > `[`Predict`](#classForestCpp_1a72bf093162b956ac310b7d613f487562)`(`[`ForestDatasetCpp`](#classForestDatasetCpp)` & dataset)` 

#### `public inline py::array_t< double > `[`PredictRaw`](#classForestCpp_1ab7d07a3d5fc821541e1353d8630d7dec)`(`[`ForestDatasetCpp`](#classForestDatasetCpp)` & dataset)` 

#### `public inline void `[`SetRootValue`](#classForestCpp_1a84f063c78a37a0ef8cd0273f1c3d231a)`(double leaf_value)` 

#### `public inline void `[`SetRootVector`](#classForestCpp_1abc913598e992bedb29e077d445599f32)`(py::array_t< double > & leaf_vector,int leaf_size)` 

#### `public void `[`AdjustResidual`](#classForestCpp_1a7746d912c13481a5c99092b3fa0bc71b)`(`[`ForestDatasetCpp`](#classForestDatasetCpp)` & dataset,`[`ResidualCpp`](#classResidualCpp)` & residual,`[`ForestSamplerCpp`](#classForestSamplerCpp)` & sampler,bool requires_basis,bool add)` 

#### `public inline StochTree::TreeEnsemble * `[`GetEnsemble`](#classForestCpp_1a9a460c31a55a035d7be41bffd6e3a1e6)`()` 

#### `public inline void `[`AddNumericSplitValue`](#classForestCpp_1a54b2db5a367fcc3c6130779de0f08b53)`(int tree_num,int leaf_num,int feature_num,double split_threshold,double left_leaf_value,double right_leaf_value)` 

#### `public inline void `[`AddNumericSplitVector`](#classForestCpp_1ae1531429d5bdf13d85752e407924d24a)`(int tree_num,int leaf_num,int feature_num,double split_threshold,py::array_t< double > left_leaf_vector,py::array_t< double > right_leaf_vector)` 

#### `public inline py::array_t< int > `[`GetTreeLeaves`](#classForestCpp_1a0c2f05421b96db1e284c5ba0547fd8dc)`(int tree_num)` 

#### `public inline py::array_t< int > `[`GetTreeSplitCounts`](#classForestCpp_1a9a02cdc1a69f1d12727c8ac8246fc6bb)`(int tree_num,int num_features)` 

#### `public inline py::array_t< int > `[`GetOverallSplitCounts`](#classForestCpp_1aadb6e632d3f9eb20da1c9ce411ed67d0)`(int num_features)` 

#### `public inline py::array_t< int > `[`GetGranularSplitCounts`](#classForestCpp_1ac23d794d2baa1c47f3253d1a57da3fa9)`(int num_features)` 

#### `public inline bool `[`IsLeafNode`](#classForestCpp_1a1a6f14e5b414a4f2a7f080566ed58271)`(int tree_id,int node_id)` 

#### `public inline bool `[`IsNumericSplitNode`](#classForestCpp_1a762f394b82a34274c2a88e9f581e228e)`(int tree_id,int node_id)` 

#### `public inline bool `[`IsCategoricalSplitNode`](#classForestCpp_1a4faac08e1de68d8675079d8652aeda78)`(int tree_id,int node_id)` 

#### `public inline int `[`ParentNode`](#classForestCpp_1a68a1ed61a92d6b6909c5feaf38e378d9)`(int tree_id,int node_id)` 

#### `public inline int `[`LeftChildNode`](#classForestCpp_1a2f03fd7713b18337a98e8ec7e9f1f1c0)`(int tree_id,int node_id)` 

#### `public inline int `[`RightChildNode`](#classForestCpp_1ad402941b119ef6bddb59d143b75f0bdf)`(int tree_id,int node_id)` 

#### `public inline int `[`SplitIndex`](#classForestCpp_1aa0994a8cf2cafce22b13f20784b3803c)`(int tree_id,int node_id)` 

#### `public inline int `[`NodeDepth`](#classForestCpp_1ac5cd5b5b47962d4eac21ed8180633be5)`(int tree_id,int node_id)` 

#### `public inline double `[`SplitThreshold`](#classForestCpp_1a2a2c4beba400f9a96119d72e3d9d026a)`(int tree_id,int node_id)` 

#### `public inline py::array_t< int > `[`SplitCategories`](#classForestCpp_1a53a8f9b5138f9f04c40cb95e2f7f05e6)`(int tree_id,int node_id)` 

#### `public inline py::array_t< double > `[`NodeLeafValues`](#classForestCpp_1ae84fe3c4daa7d43e3117d9c025410b6e)`(int tree_id,int node_id)` 

#### `public inline int `[`NumNodes`](#classForestCpp_1a96a5b0a2f4e4eaba91b5ff4429ee38ac)`(int tree_id)` 

#### `public inline int `[`NumLeaves`](#classForestCpp_1a9b0394c86703a88f565170c1c91e3bbd)`(int tree_id)` 

#### `public inline int `[`NumLeafParents`](#classForestCpp_1a5508ff762921aefda57ba8ca454d435b)`(int tree_id)` 

#### `public inline int `[`NumSplitNodes`](#classForestCpp_1a0ac612e1f3e5a9404a5e3ef03e3b384f)`(int tree_id)` 

#### `public inline py::array_t< int > `[`Nodes`](#classForestCpp_1a800710c90175da166413f72d24a2e427)`(int tree_id)` 

#### `public inline py::array_t< int > `[`Leaves`](#classForestCpp_1a1ff7e0b58124b1911208fd4988f4e193)`(int tree_id)` 

