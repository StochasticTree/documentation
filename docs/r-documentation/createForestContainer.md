_C_r_e_a_t_e _a _c_o_n_t_a_i_n_e_r _o_f _f_o_r_e_s_t _s_a_m_p_l_e_s

_D_e_s_c_r_i_p_t_i_o_n:

     Create a container of forest samples

_U_s_a_g_e:

     createForestContainer(
       num_trees,
       output_dimension = 1,
       is_leaf_constant = F,
       is_exponentiated = F
     )
     
_A_r_g_u_m_e_n_t_s:

num_trees: Number of trees

output_dimension: Dimensionality of the outcome model

is_leaf_constant: Whether leaf is constant

is_exponentiated: Whether forest predictions should be exponentiated
          before being returned

_V_a_l_u_e:

     ‘ForestSamples’ object

