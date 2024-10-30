_P_r_e_p_r_o_c_e_s_s _a _d_a_t_a_f_r_a_m_e _o_f _c_o_v_a_r_i_a_t_e _v_a_l_u_e_s, _c_o_n_v_e_r_t_i_n_g _c_a_t_e_g_o_r_i_c_a_l
_v_a_r_i_a_b_l_e_s _t_o _i_n_t_e_g_e_r_s _a_n_d _o_n_e-_h_o_t _e_n_c_o_d_i_n_g _i_f _n_e_e_d _b_e. _R_e_t_u_r_n_s _a _l_i_s_t
_i_n_c_l_u_d_i_n_g _a _m_a_t_r_i_x _o_f _p_r_e_p_r_o_c_e_s_s_e_d _c_o_v_a_r_i_a_t_e _v_a_l_u_e_s _a_n_d _a_s_s_o_c_i_a_t_e_d
_t_r_a_c_k_i_n_g.

_D_e_s_c_r_i_p_t_i_o_n:

     Preprocess a dataframe of covariate values, converting categorical
     variables to integers and one-hot encoding if need be. Returns a
     list including a matrix of preprocessed covariate values and
     associated tracking.

_U_s_a_g_e:

     createForestCovariates(
       input_data,
       ordered_cat_vars = NULL,
       unordered_cat_vars = NULL
     )
     
_A_r_g_u_m_e_n_t_s:

input_data: Dataframe or matrix of covariates. Users may pre-process
          any categorical variables as factors but it is not necessary.

ordered_cat_vars: (Optional) Vector of names of ordered categorical
          variables, or vector of column indices if ‘input_data’ is a
          matrix.

unordered_cat_vars: (Optional) Vector of names of unordered categorical
          variables, or vector of column indices if ‘input_data’ is a
          matrix.

_V_a_l_u_e:

     List with preprocessed data and details on the number of each type
     of variable, unique categories associated with categorical
     variables, and the vector of feature types needed for calls to
     BART and BCF.

_E_x_a_m_p_l_e_s:

     cov_df <- data.frame(x1 = 1:5, x2 = 5:1, x3 = 6:10)
     preprocess_list <- createForestCovariates(cov_df)
     X <- preprocess_list$X
     
