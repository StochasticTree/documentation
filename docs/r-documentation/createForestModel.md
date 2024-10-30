_C_r_e_a_t_e _a _f_o_r_e_s_t _m_o_d_e_l _o_b_j_e_c_t

_D_e_s_c_r_i_p_t_i_o_n:

     Create a forest model object

_U_s_a_g_e:

     createForestModel(
       forest_dataset,
       feature_types,
       num_trees,
       n,
       alpha,
       beta,
       min_samples_leaf,
       max_depth
     )
     
_A_r_g_u_m_e_n_t_s:

forest_dataset: ‘ForestDataset’ object, used to initialize forest
          sampling data structures

feature_types: Feature types (integers where 0 = numeric, 1 = ordered
          categorical, 2 = unordered categorical)

num_trees: Number of trees in the forest being sampled

       n: Number of observations in ‘forest_dataset’

   alpha: Root node split probability in tree prior

    beta: Depth prior penalty in tree prior

min_samples_leaf: Minimum number of samples in a tree leaf

_V_a_l_u_e:

     ‘ForestModel’ object

