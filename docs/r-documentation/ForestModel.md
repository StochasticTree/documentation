_C_l_a_s_s _t_h_a_t _d_e_f_i_n_e_s _a_n_d _s_a_m_p_l_e_s _a _f_o_r_e_s_t _m_o_d_e_l

_D_e_s_c_r_i_p_t_i_o_n:

     Hosts the C++ data structures needed to sample an ensemble of
     decision trees, and exposes functionality to run a forest sampler
     (using either MCMC or the grow-from-root algorithm).

_P_u_b_l_i_c _f_i_e_l_d_s:

     ‘tracker_ptr’ External pointer to a C++ ForestTracker class

     ‘tree_prior_ptr’ External pointer to a C++ TreePrior class

_M_e_t_h_o_d_s:

  _P_u_b_l_i_c _m_e_t_h_o_d_s:

         • ‘ForestModel$new()’

         • ‘ForestModel$sample_one_iteration()’

         • ‘ForestModel$propagate_basis_update()’

         • ‘ForestModel$propagate_residual_update()’

  _M_e_t_h_o_d '_n_e_w()':

       Create a new ForestModel object.

    _U_s_a_g_e:

         ForestModel$new(
           forest_dataset,
           feature_types,
           num_trees,
           n,
           alpha,
           beta,
           min_samples_leaf,
           max_depth = -1
         )
         

    _A_r_g_u_m_e_n_t_s:

         ‘forest_dataset’ ‘ForestDataset’ object, used to initialize
             forest sampling data structures

         ‘feature_types’ Feature types (integers where 0 = numeric, 1 =
             ordered categorical, 2 = unordered categorical)

         ‘num_trees’ Number of trees in the forest being sampled

         ‘n’ Number of observations in ‘forest_dataset’

         ‘alpha’ Root node split probability in tree prior

         ‘beta’ Depth prior penalty in tree prior

         ‘min_samples_leaf’ Minimum number of samples in a tree leaf

         ‘max_depth’ Maximum depth that any tree can reach


    _R_e_t_u_r_n_s:

         A new ‘ForestModel’ object.


  _M_e_t_h_o_d '_s_a_m_p_l_e__o_n_e__i_t_e_r_a_t_i_o_n()':

       Run a single iteration of the forest sampling algorithm (MCMC or
       GFR)

    _U_s_a_g_e:

         ForestModel$sample_one_iteration(
           forest_dataset,
           residual,
           forest_samples,
           rng,
           feature_types,
           leaf_model_int,
           leaf_model_scale,
           variable_weights,
           a_forest,
           b_forest,
           global_scale,
           cutpoint_grid_size = 500,
           gfr = T,
           pre_initialized = F
         )
         

    _A_r_g_u_m_e_n_t_s:

         ‘forest_dataset’ Dataset used to sample the forest

         ‘residual’ Outcome used to sample the forest

         ‘forest_samples’ Container of forest samples

         ‘rng’ Wrapper around C++ random number generator

         ‘feature_types’ Vector specifying the type of all p covariates
             in ‘forest_dataset’ (0 = numeric, 1 = ordered categorical,
             2 = unordered categorical)

         ‘leaf_model_int’ Integer specifying the leaf model type (0 =
             constant leaf, 1 = univariate leaf regression, 2 =
             multivariate leaf regression)

         ‘leaf_model_scale’ Scale parameter used in the leaf node model
             (should be a q x q matrix where q is the dimensionality of
             the basis and is only >1 when ‘leaf_model_int = 2’)

         ‘variable_weights’ Vector specifying sampling probability for
             all p covariates in ‘forest_dataset’

         ‘a_forest’ Shape parameter on variance forest model (if
             applicable)

         ‘b_forest’ Scale parameter on variance forest model (if
             applicable)

         ‘global_scale’ Global variance parameter

         ‘cutpoint_grid_size’ (Optional) Number of unique cutpoints to
             consider (default: 500, currently only used when ‘GFR =
             TRUE’)

         ‘gfr’ (Optional) Whether or not the forest should be sampled
             using the "grow-from-root" (GFR) algorithm

         ‘pre_initialized’ (Optional) Whether or not the leaves are
             pre-initialized outside of the sampling loop (before any
             samples are drawn). In multi-forest implementations like
             BCF, this is true, though in the single-forest supervised
             learning implementation, we can let C++ do the
             initialization. Default: F.


  _M_e_t_h_o_d '_p_r_o_p_a_g_a_t_e__b_a_s_i_s__u_p_d_a_t_e()':

       Propagates basis update through to the (full/partial) residual
       by iteratively (a) adding back in the previous prediction of
       each tree, (b) recomputing predictions for each tree (caching on
       the C++ side), (c) subtracting the new predictions from the
       residual.

       This is useful in cases where a basis (for e.g. leaf regression)
       is updated outside of a tree sampler (as with e.g. adaptive
       coding for binary treatment BCF). Once a basis has been updated,
       the overall "function" represented by a tree model has changed
       and this should be reflected through to the residual before the
       next sampling loop is run.

    _U_s_a_g_e:

         ForestModel$propagate_basis_update(
           dataset,
           outcome,
           forest_samples,
           forest_num
         )
         

    _A_r_g_u_m_e_n_t_s:

         ‘dataset’ ‘ForestDataset’ object storing the covariates and
             bases for a given forest

         ‘outcome’ ‘Outcome’ object storing the residuals to be updated
             based on forest predictions

         ‘forest_samples’ ‘ForestSamples’ object storing draws of tree
             ensembles

         ‘forest_num’ Index of forest used to update residuals
             (starting at 1, in R style)


  _M_e_t_h_o_d '_p_r_o_p_a_g_a_t_e__r_e_s_i_d_u_a_l__u_p_d_a_t_e()':

       Update the current state of the outcome (i.e. partial residual)
       data by subtracting the current predictions of each tree. This
       function is run after the ‘Outcome’ class's ‘update_data’
       method, which overwrites the partial residual with an entirely
       new stream of outcome data.

    _U_s_a_g_e:

         ForestModel$propagate_residual_update(residual)
         

    _A_r_g_u_m_e_n_t_s:

         ‘residual’ Outcome used to sample the forest


    _R_e_t_u_r_n_s:

         NULL


