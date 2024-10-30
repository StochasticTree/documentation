_O_u_t_c_o_m_e / _p_a_r_t_i_a_l _r_e_s_i_d_u_a_l _u_s_e_d _t_o _s_a_m_p_l_e _a_n _a_d_d_i_t_i_v_e _m_o_d_e_l.

_D_e_s_c_r_i_p_t_i_o_n:

     The outcome class is wrapper around a vector of (mutable) outcomes
     for ML tasks (supervised learning, causal inference). When an
     additive tree ensemble is sampled, the outcome used to sample a
     specific model term is the "partial residual" consisting of the
     outcome minus the predictions of every other model term (trees,
     group random effects, etc...).

_P_u_b_l_i_c _f_i_e_l_d_s:

     ‘data_ptr’ External pointer to a C++ Outcome class

_M_e_t_h_o_d_s:

  _P_u_b_l_i_c _m_e_t_h_o_d_s:

         • ‘Outcome$new()’

         • ‘Outcome$get_data()’

         • ‘Outcome$add_vector()’

         • ‘Outcome$subtract_vector()’

         • ‘Outcome$update_data()’

  _M_e_t_h_o_d '_n_e_w()':

       Create a new Outcome object.

    _U_s_a_g_e:

         Outcome$new(outcome)
         

    _A_r_g_u_m_e_n_t_s:

         ‘outcome’ Vector of outcome values


    _R_e_t_u_r_n_s:

         A new ‘Outcome’ object.


  _M_e_t_h_o_d '_g_e_t__d_a_t_a()':

       Extract raw data in R from the underlying C++ object

    _U_s_a_g_e:

         Outcome$get_data()
         

    _R_e_t_u_r_n_s:

         R vector containing (copy of) the values in ‘Outcome’ object


  _M_e_t_h_o_d '_a_d_d__v_e_c_t_o_r()':

       Update the current state of the outcome (i.e. partial residual)
       data by adding the values of ‘update_vector’

    _U_s_a_g_e:

         Outcome$add_vector(update_vector)
         

    _A_r_g_u_m_e_n_t_s:

         ‘update_vector’ Vector to be added to outcome


    _R_e_t_u_r_n_s:

         NULL


  _M_e_t_h_o_d '_s_u_b_t_r_a_c_t__v_e_c_t_o_r()':

       Update the current state of the outcome (i.e. partial residual)
       data by subtracting the values of ‘update_vector’

    _U_s_a_g_e:

         Outcome$subtract_vector(update_vector)
         

    _A_r_g_u_m_e_n_t_s:

         ‘update_vector’ Vector to be subtracted from outcome


    _R_e_t_u_r_n_s:

         NULL


  _M_e_t_h_o_d '_u_p_d_a_t_e__d_a_t_a()':

       Update the current state of the outcome (i.e. partial residual)
       data by replacing each element with the elements of ‘new_vector’

    _U_s_a_g_e:

         Outcome$update_data(new_vector)
         

    _A_r_g_u_m_e_n_t_s:

         ‘new_vector’ Vector from which to overwrite the current data


    _R_e_t_u_r_n_s:

         NULL


