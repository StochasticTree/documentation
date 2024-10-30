_P_r_e_p_r_o_c_e_s_s _a _m_a_t_r_i_x _o_f _c_o_v_a_r_i_a_t_e _v_a_l_u_e_s, _a_s_s_u_m_i_n_g _a_l_l _c_o_l_u_m_n_s _a_r_e
_n_u_m_e_r_i_c. _R_e_t_u_r_n_s _a _l_i_s_t _i_n_c_l_u_d_i_n_g _a _m_a_t_r_i_x _o_f _p_r_e_p_r_o_c_e_s_s_e_d _c_o_v_a_r_i_a_t_e
_v_a_l_u_e_s _a_n_d _a_s_s_o_c_i_a_t_e_d _t_r_a_c_k_i_n_g.

_D_e_s_c_r_i_p_t_i_o_n:

     Preprocess a matrix of covariate values, assuming all columns are
     numeric. Returns a list including a matrix of preprocessed
     covariate values and associated tracking.

_U_s_a_g_e:

     preprocessTrainMatrix(input_matrix)
     
_A_r_g_u_m_e_n_t_s:

input_matrix: Covariate matrix.

_V_a_l_u_e:

     List with preprocessed (unmodified) data and details on the number
     of each type of variable, unique categories associated with
     categorical variables, and the vector of feature types needed for
     calls to BART and BCF.

_E_x_a_m_p_l_e_s:

     cov_mat <- matrix(1:12, ncol = 3)
     preprocess_list <- preprocessTrainMatrix(cov_mat)
     X <- preprocess_list$X
     
