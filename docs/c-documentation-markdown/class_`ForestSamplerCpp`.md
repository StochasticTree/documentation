---
title: class `ForestSamplerCpp`
---

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

