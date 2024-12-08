---
title: class `ForestSamplerCpp`
---

# class `ForestSamplerCpp`

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public inline  `[`ForestSamplerCpp`](#classForestSamplerCpp_1a716e2183d9ee5577e19e33b7b6221d93)`(`[`ForestDatasetCpp`](#classForestDatasetCpp)` & dataset,py::array_t< int > feature_types,int num_trees,data_size_t num_obs,double alpha,double beta,int min_samples_leaf,int max_depth)` | 
`public inline  `[`~ForestSamplerCpp`](#classForestSamplerCpp_1a6ebd4b2b5b43fc2efa43bcf67fe611e3)`()` | 
`public inline StochTree::ForestTracker * `[`GetTracker`](#classForestSamplerCpp_1a826540f8d94dedfa37f59f9c4098f766)`()` | 
`public inline void `[`ReconstituteTrackerFromForest`](#classForestSamplerCpp_1a160ae5c804b6ed2b1268ad5d16d6b5ac)`(`[`ForestCpp`](#classForestCpp)` & forest,`[`ForestDatasetCpp`](#classForestDatasetCpp)` & dataset,`[`ResidualCpp`](#classResidualCpp)` & residual,bool is_mean_model)` | 
`public inline void `[`SampleOneIteration`](#classForestSamplerCpp_1ae03fd50c2a683ed6a8d889eae8a83aa2)`(`[`ForestContainerCpp`](#classForestContainerCpp)` & forest_samples,`[`ForestCpp`](#classForestCpp)` & forest,`[`ForestDatasetCpp`](#classForestDatasetCpp)` & dataset,`[`ResidualCpp`](#classResidualCpp)` & residual,`[`RngCpp`](#classRngCpp)` & rng,py::array_t< int > feature_types,int cutpoint_grid_size,py::array_t< double > leaf_model_scale_input,py::array_t< double > variable_weights,double a_forest,double b_forest,double global_variance,int leaf_model_int,bool keep_forest,bool gfr,bool pre_initialized)` | 
`public inline void `[`InitializeForestModel`](#classForestSamplerCpp_1a6b52e1327dd113b611eb3f7b42ea6c69)`(`[`ForestDatasetCpp`](#classForestDatasetCpp)` & dataset,`[`ResidualCpp`](#classResidualCpp)` & residual,`[`ForestCpp`](#classForestCpp)` & forest,int leaf_model_int,py::array_t< double > initial_values)` | 
`public inline void `[`PropagateBasisUpdate`](#classForestSamplerCpp_1a967dc7a5665da626735f4d79e7cc5ffa)`(`[`ForestDatasetCpp`](#classForestDatasetCpp)` & dataset,`[`ResidualCpp`](#classResidualCpp)` & residual,`[`ForestCpp`](#classForestCpp)` & forest)` | 
`public inline void `[`PropagateResidualUpdate`](#classForestSamplerCpp_1af17503801ae8a23510d7ed33ec663958)`(`[`ResidualCpp`](#classResidualCpp)` & residual)` | 

## Members

#### `public inline  `[`ForestSamplerCpp`](#classForestSamplerCpp_1a716e2183d9ee5577e19e33b7b6221d93)`(`[`ForestDatasetCpp`](#classForestDatasetCpp)` & dataset,py::array_t< int > feature_types,int num_trees,data_size_t num_obs,double alpha,double beta,int min_samples_leaf,int max_depth)` 

#### `public inline  `[`~ForestSamplerCpp`](#classForestSamplerCpp_1a6ebd4b2b5b43fc2efa43bcf67fe611e3)`()` 

#### `public inline StochTree::ForestTracker * `[`GetTracker`](#classForestSamplerCpp_1a826540f8d94dedfa37f59f9c4098f766)`()` 

#### `public inline void `[`ReconstituteTrackerFromForest`](#classForestSamplerCpp_1a160ae5c804b6ed2b1268ad5d16d6b5ac)`(`[`ForestCpp`](#classForestCpp)` & forest,`[`ForestDatasetCpp`](#classForestDatasetCpp)` & dataset,`[`ResidualCpp`](#classResidualCpp)` & residual,bool is_mean_model)` 

#### `public inline void `[`SampleOneIteration`](#classForestSamplerCpp_1ae03fd50c2a683ed6a8d889eae8a83aa2)`(`[`ForestContainerCpp`](#classForestContainerCpp)` & forest_samples,`[`ForestCpp`](#classForestCpp)` & forest,`[`ForestDatasetCpp`](#classForestDatasetCpp)` & dataset,`[`ResidualCpp`](#classResidualCpp)` & residual,`[`RngCpp`](#classRngCpp)` & rng,py::array_t< int > feature_types,int cutpoint_grid_size,py::array_t< double > leaf_model_scale_input,py::array_t< double > variable_weights,double a_forest,double b_forest,double global_variance,int leaf_model_int,bool keep_forest,bool gfr,bool pre_initialized)` 

#### `public inline void `[`InitializeForestModel`](#classForestSamplerCpp_1a6b52e1327dd113b611eb3f7b42ea6c69)`(`[`ForestDatasetCpp`](#classForestDatasetCpp)` & dataset,`[`ResidualCpp`](#classResidualCpp)` & residual,`[`ForestCpp`](#classForestCpp)` & forest,int leaf_model_int,py::array_t< double > initial_values)` 

#### `public inline void `[`PropagateBasisUpdate`](#classForestSamplerCpp_1a967dc7a5665da626735f4d79e7cc5ffa)`(`[`ForestDatasetCpp`](#classForestDatasetCpp)` & dataset,`[`ResidualCpp`](#classResidualCpp)` & residual,`[`ForestCpp`](#classForestCpp)` & forest)` 

#### `public inline void `[`PropagateResidualUpdate`](#classForestSamplerCpp_1af17503801ae8a23510d7ed33ec663958)`(`[`ResidualCpp`](#classResidualCpp)` & residual)` 

