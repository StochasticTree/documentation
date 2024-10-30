_P_r_e_p_r_o_c_e_s_s _c_o_v_a_r_i_a_t_e_s. _D_a_t_a_F_r_a_m_e_s _w_i_l_l _b_e _p_r_e_p_r_o_c_e_s_s_e_d _b_a_s_e_d _o_n _t_h_e_i_r
_c_o_l_u_m_n _t_y_p_e_s. _M_a_t_r_i_c_e_s _w_i_l_l _b_e _p_a_s_s_e_d _t_h_r_o_u_g_h _a_s_s_u_m_i_n_g _a_l_l _c_o_l_u_m_n_s _a_r_e
_n_u_m_e_r_i_c.

_D_e_s_c_r_i_p_t_i_o_n:

     Preprocess covariates. DataFrames will be preprocessed based on
     their column types. Matrices will be passed through assuming all
     columns are numeric.

_U_s_a_g_e:

     preprocessPredictionData(input_data, metadata)
     
_A_r_g_u_m_e_n_t_s:

input_data: Covariates, provided as either a dataframe or a matrix

metadata: List containing information on variables, including train set
          categories for categorical variables

_V_a_l_u_e:

     Preprocessed data with categorical variables appropriately handled

_E_x_a_m_p_l_e_s:

     cov_df <- data.frame(x1 = 1:5, x2 = 5:1, x3 = 6:10)
     metadata <- list(num_ordered_cat_vars = 0, num_unordered_cat_vars = 0, 
                      num_numeric_vars = 3, numeric_vars = c("x1", "x2", "x3"))
     X_preprocessed <- preprocessPredictionData(cov_df, metadata)
     
