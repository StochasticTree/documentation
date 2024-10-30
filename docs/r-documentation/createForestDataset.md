_C_r_e_a_t_e _a _f_o_r_e_s_t _d_a_t_a_s_e_t _o_b_j_e_c_t

_D_e_s_c_r_i_p_t_i_o_n:

     Create a forest dataset object

_U_s_a_g_e:

     createForestDataset(covariates, basis = NULL, variance_weights = NULL)
     
_A_r_g_u_m_e_n_t_s:

covariates: Matrix of covariates

   basis: (Optional) Matrix of bases used to define a leaf regression

variance_weights: (Optional) Vector of observation-specific variance
          weights

_V_a_l_u_e:

     ‘ForestDataset’ object

