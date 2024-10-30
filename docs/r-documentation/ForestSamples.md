_C_l_a_s_s _t_h_a_t _s_t_o_r_e_s _d_r_a_w_s _f_r_o_m _a_n _r_a_n_d_o_m _e_n_s_e_m_b_l_e _o_f _d_e_c_i_s_i_o_n _t_r_e_e_s

_D_e_s_c_r_i_p_t_i_o_n:

     Wrapper around a C++ container of tree ensembles

_P_u_b_l_i_c _f_i_e_l_d_s:

     ‘forest_container_ptr’ External pointer to a C++ ForestContainer
          class

_M_e_t_h_o_d_s:

  _P_u_b_l_i_c _m_e_t_h_o_d_s:

         • ‘ForestSamples$new()’

         • ‘ForestSamples$load_from_json()’

         • ‘ForestSamples$append_from_json()’

         • ‘ForestSamples$load_from_json_string()’

         • ‘ForestSamples$append_from_json_string()’

         • ‘ForestSamples$predict()’

         • ‘ForestSamples$predict_raw()’

         • ‘ForestSamples$predict_raw_single_forest()’

         • ‘ForestSamples$set_root_leaves()’

         • ‘ForestSamples$prepare_for_sampler()’

         • ‘ForestSamples$adjust_residual()’

         • ‘ForestSamples$save_json()’

         • ‘ForestSamples$load_json()’

         • ‘ForestSamples$num_samples()’

         • ‘ForestSamples$num_trees()’

         • ‘ForestSamples$output_dimension()’

         • ‘ForestSamples$add_forest_with_constant_leaves()’

         • ‘ForestSamples$add_numeric_split_tree()’

         • ‘ForestSamples$get_tree_leaves()’

         • ‘ForestSamples$get_tree_split_counts()’

         • ‘ForestSamples$get_forest_split_counts()’

         • ‘ForestSamples$get_aggregate_split_counts()’

         • ‘ForestSamples$get_granular_split_counts()’

         • ‘ForestSamples$ensemble_tree_max_depth()’

         • ‘ForestSamples$average_ensemble_max_depth()’

         • ‘ForestSamples$average_max_depth()’

  _M_e_t_h_o_d '_n_e_w()':

       Create a new ForestContainer object.

    _U_s_a_g_e:

         ForestSamples$new(
           num_trees,
           output_dimension = 1,
           is_leaf_constant = F,
           is_exponentiated = F
         )
         

    _A_r_g_u_m_e_n_t_s:

         ‘num_trees’ Number of trees

         ‘output_dimension’ Dimensionality of the outcome model

         ‘is_leaf_constant’ Whether leaf is constant

         ‘is_exponentiated’ Whether forest predictions should be
             exponentiated before being returned


    _R_e_t_u_r_n_s:

         A new ‘ForestContainer’ object.


  _M_e_t_h_o_d '_l_o_a_d__f_r_o_m__j_s_o_n()':

       Create a new ‘ForestContainer’ object from a json object

    _U_s_a_g_e:

         ForestSamples$load_from_json(json_object, json_forest_label)
         

    _A_r_g_u_m_e_n_t_s:

         ‘json_object’ Object of class ‘CppJson’

         ‘json_forest_label’ Label referring to a particular forest
             (i.e. "forest_0") in the overall json hierarchy


    _R_e_t_u_r_n_s:

         A new ‘ForestContainer’ object.


  _M_e_t_h_o_d '_a_p_p_e_n_d__f_r_o_m__j_s_o_n()':

       Append to a ‘ForestContainer’ object from a json object

    _U_s_a_g_e:

         ForestSamples$append_from_json(json_object, json_forest_label)
         

    _A_r_g_u_m_e_n_t_s:

         ‘json_object’ Object of class ‘CppJson’

         ‘json_forest_label’ Label referring to a particular forest
             (i.e. "forest_0") in the overall json hierarchy


    _R_e_t_u_r_n_s:

         NULL


  _M_e_t_h_o_d '_l_o_a_d__f_r_o_m__j_s_o_n__s_t_r_i_n_g()':

       Create a new ‘ForestContainer’ object from a json object

    _U_s_a_g_e:

         ForestSamples$load_from_json_string(json_string, json_forest_label)
         

    _A_r_g_u_m_e_n_t_s:

         ‘json_string’ JSON string which parses into object of class
             ‘CppJson’

         ‘json_forest_label’ Label referring to a particular forest
             (i.e. "forest_0") in the overall json hierarchy


    _R_e_t_u_r_n_s:

         A new ‘ForestContainer’ object.


  _M_e_t_h_o_d '_a_p_p_e_n_d__f_r_o_m__j_s_o_n__s_t_r_i_n_g()':

       Append to a ‘ForestContainer’ object from a json object

    _U_s_a_g_e:

         ForestSamples$append_from_json_string(json_string, json_forest_label)
         

    _A_r_g_u_m_e_n_t_s:

         ‘json_string’ JSON string which parses into object of class
             ‘CppJson’

         ‘json_forest_label’ Label referring to a particular forest
             (i.e. "forest_0") in the overall json hierarchy


    _R_e_t_u_r_n_s:

         NULL


  _M_e_t_h_o_d '_p_r_e_d_i_c_t()':

       Predict every tree ensemble on every sample in ‘forest_dataset’

    _U_s_a_g_e:

         ForestSamples$predict(forest_dataset)
         

    _A_r_g_u_m_e_n_t_s:

         ‘forest_dataset’ ‘ForestDataset’ R class


    _R_e_t_u_r_n_s:

         matrix of predictions with as many rows as in forest_dataset
         and as many columns as samples in the ‘ForestContainer’


  _M_e_t_h_o_d '_p_r_e_d_i_c_t__r_a_w()':

       Predict "raw" leaf values (without being multiplied by basis)
       for every tree ensemble on every sample in ‘forest_dataset’

    _U_s_a_g_e:

         ForestSamples$predict_raw(forest_dataset)
         

    _A_r_g_u_m_e_n_t_s:

         ‘forest_dataset’ ‘ForestDataset’ R class


    _R_e_t_u_r_n_s:

         Array of predictions for each observation in ‘forest_dataset’
         and each sample in the ‘ForestSamples’ class with each
         prediction having the dimensionality of the forests' leaf
         model. In the case of a constant leaf model or univariate leaf
         regression, this array is two-dimensional (number of
         observations, number of forest samples). In the case of a
         multivariate leaf regression, this array is three-dimension
         (number of observations, leaf model dimension, number of
         samples).


  _M_e_t_h_o_d '_p_r_e_d_i_c_t__r_a_w__s_i_n_g_l_e__f_o_r_e_s_t()':

       Predict "raw" leaf values (without being multiplied by basis)
       for a specific forest on every sample in ‘forest_dataset’

    _U_s_a_g_e:

         ForestSamples$predict_raw_single_forest(forest_dataset, forest_num)
         

    _A_r_g_u_m_e_n_t_s:

         ‘forest_dataset’ ‘ForestDataset’ R class

         ‘forest_num’ Index of the forest sample within the container


    _R_e_t_u_r_n_s:

         matrix of predictions with as many rows as in forest_dataset
         and as many columns as samples in the ‘ForestContainer’


  _M_e_t_h_o_d '_s_e_t__r_o_o_t__l_e_a_v_e_s()':

       Set a constant predicted value for every tree in the ensemble.
       Stops program if any tree is more than a root node.

    _U_s_a_g_e:

         ForestSamples$set_root_leaves(forest_num, leaf_value)
         

    _A_r_g_u_m_e_n_t_s:

         ‘forest_num’ Index of the forest sample within the container.

         ‘leaf_value’ Constant leaf value(s) to be fixed for each tree
             in the ensemble indexed by ‘forest_num’. Can be either a
             single number or a vector, depending on the forest's leaf
             dimension.


  _M_e_t_h_o_d '_p_r_e_p_a_r_e__f_o_r__s_a_m_p_l_e_r()':

       Set a constant predicted value for every tree in the ensemble.
       Stops program if any tree is more than a root node.

    _U_s_a_g_e:

         ForestSamples$prepare_for_sampler(
           dataset,
           outcome,
           forest_model,
           leaf_model_int,
           leaf_value
         )
         

    _A_r_g_u_m_e_n_t_s:

         ‘dataset’ ‘ForestDataset’ Dataset class (covariates, basis,
             etc...)

         ‘outcome’ ‘Outcome’ Outcome class (residual / partial
             residual)

         ‘forest_model’ ‘ForestModel’ object storing tracking
             structures used in training / sampling

         ‘leaf_model_int’ Integer value encoding the leaf model type (0
             = constant gaussian, 1 = univariate gaussian, 2 =
             multivariate gaussian, 3 = log linear variance).

         ‘leaf_value’ Constant leaf value(s) to be fixed for each tree
             in the ensemble indexed by ‘forest_num’. Can be either a
             single number or a vector, depending on the forest's leaf
             dimension.


  _M_e_t_h_o_d '_a_d_j_u_s_t__r_e_s_i_d_u_a_l()':

       Adjusts residual based on the predictions of a forest

       This is typically run just once at the beginning of a forest
       sampling algorithm. After trees are initialized with constant
       root node predictions, their root predictions are subtracted out
       of the residual.

    _U_s_a_g_e:

         ForestSamples$adjust_residual(
           dataset,
           outcome,
           forest_model,
           requires_basis,
           forest_num,
           add
         )
         

    _A_r_g_u_m_e_n_t_s:

         ‘dataset’ ‘ForestDataset’ object storing the covariates and
             bases for a given forest

         ‘outcome’ ‘Outcome’ object storing the residuals to be updated
             based on forest predictions

         ‘forest_model’ ‘ForestModel’ object storing tracking
             structures used in training / sampling

         ‘requires_basis’ Whether or not a forest requires a basis for
             prediction

         ‘forest_num’ Index of forest used to update residuals

         ‘add’ Whether forest predictions should be added to or
             subtracted from residuals


  _M_e_t_h_o_d '_s_a_v_e__j_s_o_n()':

       Store the trees and metadata of ‘ForestDataset’ class in a json
       file

    _U_s_a_g_e:

         ForestSamples$save_json(json_filename)
         

    _A_r_g_u_m_e_n_t_s:

         ‘json_filename’ Name of output json file (must end in ".json")


  _M_e_t_h_o_d '_l_o_a_d__j_s_o_n()':

       Load trees and metadata for an ensemble from a json file. Note
       that any trees and metadata already present in ‘ForestDataset’
       class will be overwritten.

    _U_s_a_g_e:

         ForestSamples$load_json(json_filename)
         

    _A_r_g_u_m_e_n_t_s:

         ‘json_filename’ Name of model input json file (must end in
             ".json")


  _M_e_t_h_o_d '_n_u_m__s_a_m_p_l_e_s()':

       Return number of samples in a ‘ForestContainer’ object

    _U_s_a_g_e:

         ForestSamples$num_samples()
         

    _R_e_t_u_r_n_s:

         Sample count


  _M_e_t_h_o_d '_n_u_m__t_r_e_e_s()':

       Return number of trees in each ensemble of a ‘ForestContainer’
       object

    _U_s_a_g_e:

         ForestSamples$num_trees()
         

    _R_e_t_u_r_n_s:

         Tree count


  _M_e_t_h_o_d '_o_u_t_p_u_t__d_i_m_e_n_s_i_o_n()':

       Return output dimension of trees in a ‘ForestContainer’ object

    _U_s_a_g_e:

         ForestSamples$output_dimension()
         

    _R_e_t_u_r_n_s:

         Leaf node parameter size


  _M_e_t_h_o_d '_a_d_d__f_o_r_e_s_t__w_i_t_h__c_o_n_s_t_a_n_t__l_e_a_v_e_s()':

       Add a new all-root ensemble to the container, with all of the
       leaves set to the value / vector provided

    _U_s_a_g_e:

         ForestSamples$add_forest_with_constant_leaves(leaf_value)
         

    _A_r_g_u_m_e_n_t_s:

         ‘leaf_value’ Value (or vector of values) to initialize root
             nodes in tree


  _M_e_t_h_o_d '_a_d_d__n_u_m_e_r_i_c__s_p_l_i_t__t_r_e_e()':

       Add a numeric (i.e. X,i <= c) split to a given tree in the
       ensemble

    _U_s_a_g_e:

         ForestSamples$add_numeric_split_tree(
           forest_num,
           tree_num,
           leaf_num,
           feature_num,
           split_threshold,
           left_leaf_value,
           right_leaf_value
         )
         

    _A_r_g_u_m_e_n_t_s:

         ‘forest_num’ Index of the forest which contains the tree to be
             split

         ‘tree_num’ Index of the tree to be split

         ‘leaf_num’ Leaf to be split

         ‘feature_num’ Feature that defines the new split

         ‘split_threshold’ Value that defines the cutoff of the new
             split

         ‘left_leaf_value’ Value (or vector of values) to assign to the
             newly created left node

         ‘right_leaf_value’ Value (or vector of values) to assign to
             the newly created right node


  _M_e_t_h_o_d '_g_e_t__t_r_e_e__l_e_a_v_e_s()':

       Retrieve a vector of indices of leaf nodes for a given tree in a
       given forest

    _U_s_a_g_e:

         ForestSamples$get_tree_leaves(forest_num, tree_num)
         

    _A_r_g_u_m_e_n_t_s:

         ‘forest_num’ Index of the forest which contains tree
             ‘tree_num’

         ‘tree_num’ Index of the tree for which leaf indices will be
             retrieved


  _M_e_t_h_o_d '_g_e_t__t_r_e_e__s_p_l_i_t__c_o_u_n_t_s()':

       Retrieve a vector of split counts for every training set
       variable in a given tree in a given forest

    _U_s_a_g_e:

         ForestSamples$get_tree_split_counts(forest_num, tree_num, num_features)
         

    _A_r_g_u_m_e_n_t_s:

         ‘forest_num’ Index of the forest which contains tree
             ‘tree_num’

         ‘tree_num’ Index of the tree for which split counts will be
             retrieved

         ‘num_features’ Total number of features in the training set


  _M_e_t_h_o_d '_g_e_t__f_o_r_e_s_t__s_p_l_i_t__c_o_u_n_t_s()':

       Retrieve a vector of split counts for every training set
       variable in a given forest

    _U_s_a_g_e:

         ForestSamples$get_forest_split_counts(forest_num, num_features)
         

    _A_r_g_u_m_e_n_t_s:

         ‘forest_num’ Index of the forest for which split counts will
             be retrieved

         ‘num_features’ Total number of features in the training set


  _M_e_t_h_o_d '_g_e_t__a_g_g_r_e_g_a_t_e__s_p_l_i_t__c_o_u_n_t_s()':

       Retrieve a vector of split counts for every training set
       variable in a given forest, aggregated across ensembles and
       trees

    _U_s_a_g_e:

         ForestSamples$get_aggregate_split_counts(num_features)
         

    _A_r_g_u_m_e_n_t_s:

         ‘num_features’ Total number of features in the training set


  _M_e_t_h_o_d '_g_e_t__g_r_a_n_u_l_a_r__s_p_l_i_t__c_o_u_n_t_s()':

       Retrieve a vector of split counts for every training set
       variable in a given forest, reported separately for each
       ensemble and tree

    _U_s_a_g_e:

         ForestSamples$get_granular_split_counts(num_features)
         

    _A_r_g_u_m_e_n_t_s:

         ‘num_features’ Total number of features in the training set


  _M_e_t_h_o_d '_e_n_s_e_m_b_l_e__t_r_e_e__m_a_x__d_e_p_t_h()':

       Maximum depth of a specific tree in a specific ensemble in a
       ‘ForestContainer’ object

    _U_s_a_g_e:

         ForestSamples$ensemble_tree_max_depth(ensemble_num, tree_num)
         

    _A_r_g_u_m_e_n_t_s:

         ‘ensemble_num’ Ensemble number

         ‘tree_num’ Tree index within ensemble ‘ensemble_num’


    _R_e_t_u_r_n_s:

         Maximum leaf depth


  _M_e_t_h_o_d '_a_v_e_r_a_g_e__e_n_s_e_m_b_l_e__m_a_x__d_e_p_t_h()':

       Average the maximum depth of each tree in a given ensemble in a
       ‘ForestContainer’ object

    _U_s_a_g_e:

         ForestSamples$average_ensemble_max_depth(ensemble_num)
         

    _A_r_g_u_m_e_n_t_s:

         ‘ensemble_num’ Ensemble number


    _R_e_t_u_r_n_s:

         Average maximum depth


  _M_e_t_h_o_d '_a_v_e_r_a_g_e__m_a_x__d_e_p_t_h()':

       Average the maximum depth of each tree in each ensemble in a
       ‘ForestContainer’ object

    _U_s_a_g_e:

         ForestSamples$average_max_depth()
         

    _R_e_t_u_r_n_s:

         Average maximum depth


