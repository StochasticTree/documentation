_C_o_m_b_i_n_e _m_u_l_t_i_p_l_e _J_S_O_N _m_o_d_e_l _o_b_j_e_c_t_s _c_o_n_t_a_i_n_i_n_g _r_a_n_d_o_m _e_f_f_e_c_t_s (_w_i_t_h _t_h_e
_s_a_m_e _h_i_e_r_a_r_c_h_y / _s_c_h_e_m_a) _i_n_t_o _a _s_i_n_g_l_e _c_o_n_t_a_i_n_e_r

_D_e_s_c_r_i_p_t_i_o_n:

     Combine multiple JSON model objects containing random effects
     (with the same hierarchy / schema) into a single container

_U_s_a_g_e:

     loadRandomEffectSamplesCombinedJson(json_object_list, json_rfx_num)
     
_A_r_g_u_m_e_n_t_s:

json_object_list: List of objects of class ‘CppJson’

json_rfx_num: Integer index indicating the position of the random
          effects term to be unpacked

_V_a_l_u_e:

     ‘RandomEffectSamples’ object

