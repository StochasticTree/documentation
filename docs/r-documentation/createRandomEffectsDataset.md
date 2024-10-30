_C_r_e_a_t_e _a _r_a_n_d_o_m _e_f_f_e_c_t_s _d_a_t_a_s_e_t _o_b_j_e_c_t

_D_e_s_c_r_i_p_t_i_o_n:

     Create a random effects dataset object

_U_s_a_g_e:

     createRandomEffectsDataset(group_labels, basis, variance_weights = NULL)
     
_A_r_g_u_m_e_n_t_s:

group_labels: Vector of group labels

   basis: Matrix of bases used to define the random effects regression
          (for an intercept-only model, pass an array of ones)

variance_weights: (Optional) Vector of observation-specific variance
          weights

_V_a_l_u_e:

     ‘RandomEffectsDataset’ object

