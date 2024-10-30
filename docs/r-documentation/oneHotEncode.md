_C_o_n_v_e_r_t _a _v_e_c_t_o_r _o_f _u_n_o_r_d_e_r_e_d _c_a_t_e_g_o_r_i_c_a_l _d_a_t_a (_e_i_t_h_e_r _n_u_m_e_r_i_c _o_r
_c_h_a_r_a_c_t_e_r _l_a_b_e_l_s) _t_o _a "_o_n_e-_h_o_t" _e_n_c_o_d_e_d _m_a_t_r_i_x _i_n _w_h_i_c_h _a _1 _i_n _a
_c_o_l_u_m_n _i_n_d_i_c_a_t_e_s _t_h_e _p_r_e_s_e_n_c_e _o_f _t_h_e _r_e_l_e_v_a_n_t _c_a_t_e_g_o_r_y.

_D_e_s_c_r_i_p_t_i_o_n:

     This procedure assumes that a reference set of observations for
     this variable (typically a training set that was used to sample a
     forest) has already been one-hot encoded and that the unique
     levels of the training set variable are available (and passed as
     ‘unique_levels’). Test set observations that contain categories
     not in ‘unique_levels’ will all be mapped to the last column of
     this matrix

_U_s_a_g_e:

     oneHotEncode(x_input, unique_levels)
     
_A_r_g_u_m_e_n_t_s:

 x_input: Vector of unordered categorical data (typically either
          strings integers, but this function also accepts floating
          point data).

unique_levels: Unique values of the categorical variable used to create
          the initial one-hot matrix (typically a training set)

_V_a_l_u_e:

     Binary one-hot matrix

_E_x_a_m_p_l_e_s:

     x <- sample(1:8, 100, TRUE)
     x_test <- sample(1:9, 10, TRUE)
     x_onehot <- oneHotEncode(x_test, levels(factor(x)))
     
