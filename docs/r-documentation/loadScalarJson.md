_L_o_a_d _a _s_c_a_l_a_r _f_r_o_m _j_s_o_n

_D_e_s_c_r_i_p_t_i_o_n:

     Load a scalar from json

_U_s_a_g_e:

     loadScalarJson(json_object, json_scalar_label, subfolder_name = NULL)
     
_A_r_g_u_m_e_n_t_s:

json_object: Object of class ‘CppJson’

json_scalar_label: Label referring to a particular scalar / string
          value (i.e. "num_samples") in the overall json hierarchy

subfolder_name: (Optional) Name of the subfolder / hierarchy under
          which vector sits

_V_a_l_u_e:

     R vector

