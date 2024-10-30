_C_l_a_s_s _t_h_a_t _d_e_f_i_n_e_s _a "_t_r_a_c_k_e_r" _f_o_r _r_a_n_d_o_m _e_f_f_e_c_t_s _m_o_d_e_l_s, _m_o_s_t _n_o_t_a_b_l_y
_s_t_o_r_i_n_g _t_h_e _d_a_t_a _i_n_d_i_c_e_s _a_v_a_i_l_a_b_l_e _i_n _e_a_c_h _g_r_o_u_p _f_o_r _q_u_i_c_k_e_r _p_o_s_t_e_r_i_o_r
_c_o_m_p_u_t_a_t_i_o_n _a_n_d _s_a_m_p_l_i_n_g _o_f _r_a_n_d_o_m _e_f_f_e_c_t_s _t_e_r_m_s.

_D_e_s_c_r_i_p_t_i_o_n:

     Stores a mapping from every observation to its group index, a
     mapping from group indices to the training sample observations
     available in that group, and predictions for each observation.

_P_u_b_l_i_c _f_i_e_l_d_s:

     ‘rfx_tracker_ptr’ External pointer to a C++
          StochTree::RandomEffectsTracker class

_M_e_t_h_o_d_s:

  _P_u_b_l_i_c _m_e_t_h_o_d_s:

         • ‘RandomEffectsTracker$new()’

  _M_e_t_h_o_d '_n_e_w()':

       Create a new RandomEffectsTracker object.

    _U_s_a_g_e:

         RandomEffectsTracker$new(rfx_group_indices)
         

    _A_r_g_u_m_e_n_t_s:

         ‘rfx_group_indices’ Integer indices indicating groups used to
             define random effects


    _R_e_t_u_r_n_s:

         A new ‘RandomEffectsTracker’ object.


