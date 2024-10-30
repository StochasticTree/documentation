_C_o_n_v_e_r_t _a _v_e_c_t_o_r _o_f _u_n_o_r_d_e_r_e_d _c_a_t_e_g_o_r_i_c_a_l _d_a_t_a (_e_i_t_h_e_r _n_u_m_e_r_i_c _o_r
_c_h_a_r_a_c_t_e_r _l_a_b_e_l_s) _t_o _a "_o_n_e-_h_o_t" _e_n_c_o_d_e_d _m_a_t_r_i_x _i_n _w_h_i_c_h _a _1 _i_n _a
_c_o_l_u_m_n _i_n_d_i_c_a_t_e_s _t_h_e _p_r_e_s_e_n_c_e _o_f _t_h_e _r_e_l_e_v_a_n_t _c_a_t_e_g_o_r_y.

_D_e_s_c_r_i_p_t_i_o_n:

     To allow for prediction on "unseen" categories in a test dataset,
     this procedure pads the one-hot matrix with a blank "other"
     column. Test set observations that contain categories not in
     ‘levels(factor(x_input))’ will all be mapped to this column.

_U_s_a_g_e:

     oneHotInitializeAndEncode(x_input)
     
_A_r_g_u_m_e_n_t_s:

 x_input: Vector of unordered categorical data (typically either
          strings integers, but this function also accepts floating
          point data).

_V_a_l_u_e:

     List containing a binary one-hot matrix and the unique levels of
     the input variable. These unique levels are used in the BCF and
     BART functions.

_E_x_a_m_p_l_e_s:

     x <- c("a","c","b","c","d","a","c","a","b","d")
     x_onehot <- oneHotInitializeAndEncode(x)
     
