_R_u_n _s_o_m_e _s_i_m_p_l_e _p_r_e_p_r_o_c_e_s_s_i_n_g _o_f _o_r_d_e_r_e_d _c_a_t_e_g_o_r_i_c_a_l _v_a_r_i_a_b_l_e_s,
_c_o_n_v_e_r_t_i_n_g _o_r_d_e_r_e_d _l_e_v_e_l_s _t_o _i_n_t_e_g_e_r_s _i_f _n_e_c_e_s_s_a_r_y, _a_n_d _s_t_o_r_i_n_g _t_h_e
_u_n_i_q_u_e _l_e_v_e_l_s _o_f _a _v_a_r_i_a_b_l_e.

_D_e_s_c_r_i_p_t_i_o_n:

     Run some simple preprocessing of ordered categorical variables,
     converting ordered levels to integers if necessary, and storing
     the unique levels of a variable.

_U_s_a_g_e:

     orderedCatInitializeAndPreprocess(x_input)
     
_A_r_g_u_m_e_n_t_s:

 x_input: Vector of ordered categorical data. If the data is not
          already stored as an ordered factor, it will be converted to
          one using the default sort order.

_V_a_l_u_e:

     List containing a preprocessed vector of integer-converted ordered
     categorical observations and the unique level of the original
     ordered categorical feature.

_E_x_a_m_p_l_e_s:

     x <- c("1. Strongly disagree", "3. Neither agree nor disagree", "2. Disagree", "4. Agree", "3. Neither agree nor disagree", "5. Strongly agree", "4. Agree")
     preprocess_list <- orderedCatInitializeAndPreprocess(x)
     x_preprocessed <- preprocess_list$x_preprocessed
     
