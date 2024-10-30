_G_e_n_e_r_i_c _f_u_n_c_t_i_o_n _f_o_r _e_x_t_r_a_c_t_i_n_g _r_a_n_d_o_m _e_f_f_e_c_t _s_a_m_p_l_e_s _f_r_o_m _a _m_o_d_e_l
_o_b_j_e_c_t (_B_C_F, _B_A_R_T, _e_t_c...)

_D_e_s_c_r_i_p_t_i_o_n:

     Generic function for extracting random effect samples from a model
     object (BCF, BART, etc...)

_U_s_a_g_e:

     getRandomEffectSamples(object, ...)
     
_A_r_g_u_m_e_n_t_s:

  object: Fitted model object from which to extract random effects

     ...: Other parameters to be used in random effects extraction

_V_a_l_u_e:

     List of random effect samples

