_D_a_t_a_s_e_t _u_s_e_d _t_o _s_a_m_p_l_e _a _r_a_n_d_o_m _e_f_f_e_c_t_s _m_o_d_e_l

_D_e_s_c_r_i_p_t_i_o_n:

     A dataset consists of three matrices / vectors: group labels,
     bases, and variance weights. Variance weights are optional.

_P_u_b_l_i_c _f_i_e_l_d_s:

     ‘data_ptr’ External pointer to a C++ RandomEffectsDataset class

_M_e_t_h_o_d_s:

  _P_u_b_l_i_c _m_e_t_h_o_d_s:

         • ‘RandomEffectsDataset$new()’

         • ‘RandomEffectsDataset$num_observations()’

         • ‘RandomEffectsDataset$has_group_labels()’

         • ‘RandomEffectsDataset$has_basis()’

         • ‘RandomEffectsDataset$has_variance_weights()’

  _M_e_t_h_o_d '_n_e_w()':

       Create a new RandomEffectsDataset object.

    _U_s_a_g_e:

         RandomEffectsDataset$new(group_labels, basis, variance_weights = NULL)
         

    _A_r_g_u_m_e_n_t_s:

         ‘group_labels’ Vector of group labels

         ‘basis’ Matrix of bases used to define the random effects
             regression (for an intercept-only model, pass an array of
             ones)

         ‘variance_weights’ (Optional) Vector of observation-specific
             variance weights


    _R_e_t_u_r_n_s:

         A new ‘RandomEffectsDataset’ object.


  _M_e_t_h_o_d '_n_u_m__o_b_s_e_r_v_a_t_i_o_n_s()':

       Return number of observations in a ‘RandomEffectsDataset’ object

    _U_s_a_g_e:

         RandomEffectsDataset$num_observations()
         

    _R_e_t_u_r_n_s:

         Observation count


  _M_e_t_h_o_d '_h_a_s__g_r_o_u_p__l_a_b_e_l_s()':

       Whether or not a dataset has group label indices

    _U_s_a_g_e:

         RandomEffectsDataset$has_group_labels()
         

    _R_e_t_u_r_n_s:

         True if group label vector is loaded, false otherwise


  _M_e_t_h_o_d '_h_a_s__b_a_s_i_s()':

       Whether or not a dataset has a basis matrix

    _U_s_a_g_e:

         RandomEffectsDataset$has_basis()
         

    _R_e_t_u_r_n_s:

         True if basis matrix is loaded, false otherwise


  _M_e_t_h_o_d '_h_a_s__v_a_r_i_a_n_c_e__w_e_i_g_h_t_s()':

       Whether or not a dataset has variance weights

    _U_s_a_g_e:

         RandomEffectsDataset$has_variance_weights()
         

    _R_e_t_u_r_n_s:

         True if variance weights are loaded, false otherwise


