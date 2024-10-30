_D_a_t_a_s_e_t _u_s_e_d _t_o _s_a_m_p_l_e _a _f_o_r_e_s_t

_D_e_s_c_r_i_p_t_i_o_n:

     A dataset consists of three matrices / vectors: covariates, bases,
     and variance weights. Both the basis vector and variance weights
     are optional.

_P_u_b_l_i_c _f_i_e_l_d_s:

     ‘data_ptr’ External pointer to a C++ ForestDataset class

_M_e_t_h_o_d_s:

  _P_u_b_l_i_c _m_e_t_h_o_d_s:

         • ‘ForestDataset$new()’

         • ‘ForestDataset$update_basis()’

         • ‘ForestDataset$num_observations()’

         • ‘ForestDataset$num_covariates()’

         • ‘ForestDataset$num_basis()’

         • ‘ForestDataset$has_basis()’

         • ‘ForestDataset$has_variance_weights()’

  _M_e_t_h_o_d '_n_e_w()':

       Create a new ForestDataset object.

    _U_s_a_g_e:

         ForestDataset$new(covariates, basis = NULL, variance_weights = NULL)
         

    _A_r_g_u_m_e_n_t_s:

         ‘covariates’ Matrix of covariates

         ‘basis’ (Optional) Matrix of bases used to define a leaf
             regression

         ‘variance_weights’ (Optional) Vector of observation-specific
             variance weights


    _R_e_t_u_r_n_s:

         A new ‘ForestDataset’ object.


  _M_e_t_h_o_d '_u_p_d_a_t_e__b_a_s_i_s()':

       Update basis matrix in a dataset

    _U_s_a_g_e:

         ForestDataset$update_basis(basis)
         

    _A_r_g_u_m_e_n_t_s:

         ‘basis’ Updated matrix of bases used to define a leaf
             regression


  _M_e_t_h_o_d '_n_u_m__o_b_s_e_r_v_a_t_i_o_n_s()':

       Return number of observations in a ‘ForestDataset’ object

    _U_s_a_g_e:

         ForestDataset$num_observations()
         

    _R_e_t_u_r_n_s:

         Observation count


  _M_e_t_h_o_d '_n_u_m__c_o_v_a_r_i_a_t_e_s()':

       Return number of covariates in a ‘ForestDataset’ object

    _U_s_a_g_e:

         ForestDataset$num_covariates()
         

    _R_e_t_u_r_n_s:

         Covariate count


  _M_e_t_h_o_d '_n_u_m__b_a_s_i_s()':

       Return number of bases in a ‘ForestDataset’ object

    _U_s_a_g_e:

         ForestDataset$num_basis()
         

    _R_e_t_u_r_n_s:

         Basis count


  _M_e_t_h_o_d '_h_a_s__b_a_s_i_s()':

       Whether or not a dataset has a basis matrix

    _U_s_a_g_e:

         ForestDataset$has_basis()
         

    _R_e_t_u_r_n_s:

         True if basis matrix is loaded, false otherwise


  _M_e_t_h_o_d '_h_a_s__v_a_r_i_a_n_c_e__w_e_i_g_h_t_s()':

       Whether or not a dataset has variance weights

    _U_s_a_g_e:

         ForestDataset$has_variance_weights()
         

    _R_e_t_u_r_n_s:

         True if variance weights are loaded, false otherwise


