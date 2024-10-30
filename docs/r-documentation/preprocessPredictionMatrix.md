_P_r_e_p_r_o_c_e_s_s _a _m_a_t_r_i_x _o_f _c_o_v_a_r_i_a_t_e _v_a_l_u_e_s, _a_s_s_u_m_i_n_g _a_l_l _c_o_l_u_m_n_s _a_r_e
_n_u_m_e_r_i_c.

_D_e_s_c_r_i_p_t_i_o_n:

     Preprocess a matrix of covariate values, assuming all columns are
     numeric.

_U_s_a_g_e:

     preprocessPredictionMatrix(input_matrix, metadata)
     
_A_r_g_u_m_e_n_t_s:

input_matrix: Covariate matrix.

metadata: List containing information on variables, including train set
          categories for categorical variables

_V_a_l_u_e:

     Preprocessed data with categorical variables appropriately
     preprocessed

_E_x_a_m_p_l_e_s:

     cov_mat <- matrix(c(1:5, 5:1, 6:10), ncol = 3)
     metadata <- list(num_ordered_cat_vars = 0, num_unordered_cat_vars = 0, 
                      num_numeric_vars = 3, numeric_vars = c("x1", "x2", "x3"))
     X_preprocessed <- preprocessPredictionMatrix(cov_mat, metadata)
     
