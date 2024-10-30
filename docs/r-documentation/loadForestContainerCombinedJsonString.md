_C_o_m_b_i_n_e _m_u_l_t_i_p_l_e _J_S_O_N _s_t_r_i_n_g_s _r_e_p_r_e_s_e_n_t_i_n_g _m_o_d_e_l _o_b_j_e_c_t_s _c_o_n_t_a_i_n_i_n_g
_f_o_r_e_s_t_s (_w_i_t_h _t_h_e _s_a_m_e _h_i_e_r_a_r_c_h_y / _s_c_h_e_m_a) _i_n_t_o _a _s_i_n_g_l_e
_f_o_r_e_s_t__c_o_n_t_a_i_n_e_r

_D_e_s_c_r_i_p_t_i_o_n:

     Combine multiple JSON strings representing model objects
     containing forests (with the same hierarchy / schema) into a
     single forest_container

_U_s_a_g_e:

     loadForestContainerCombinedJsonString(json_string_list, json_forest_label)
     
_A_r_g_u_m_e_n_t_s:

json_string_list: List of strings that parse into objects of type
          ‘CppJson’

json_forest_label: Label referring to a particular forest (i.e.
          "forest_0") in the overall json hierarchy (must exist in
          every json object in the list)

_V_a_l_u_e:

     ‘ForestSamples’ object

