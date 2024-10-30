_E_x_t_r_a_c_t _r_a_w _s_a_m_p_l_e _v_a_l_u_e_s _f_o_r _e_a_c_h _o_f _t_h_e _r_a_n_d_o_m _e_f_f_e_c_t _p_a_r_a_m_e_t_e_r
_t_e_r_m_s.

_D_e_s_c_r_i_p_t_i_o_n:

     Extract raw sample values for each of the random effect parameter
     terms.

_U_s_a_g_e:

     ## S3 method for class 'bartmodel'
     getRandomEffectSamples(object, ...)
     
_A_r_g_u_m_e_n_t_s:

  object: Object of type ‘bcf’ containing draws of a Bayesian causal
          forest model and associated sampling outputs.

     ...: Other parameters to be used in random effects extraction

_V_a_l_u_e:

     List of arrays. The alpha array has dimension (‘num_components’,
     ‘num_samples’) and is simply a vector if ‘num_components = 1’. The
     xi and beta arrays have dimension (‘num_components’, ‘num_groups’,
     ‘num_samples’) and is simply a matrix if ‘num_components = 1’. The
     sigma array has dimension (‘num_components’, ‘num_samples’) and is
     simply a vector if ‘num_components = 1’.

_E_x_a_m_p_l_e_s:

     n <- 100
     p <- 5
     X <- matrix(runif(n*p), ncol = p)
     f_XW <- (
         ((0 <= X[,1]) & (0.25 > X[,1])) * (-7.5) + 
         ((0.25 <= X[,1]) & (0.5 > X[,1])) * (-2.5) + 
         ((0.5 <= X[,1]) & (0.75 > X[,1])) * (2.5) + 
         ((0.75 <= X[,1]) & (1 > X[,1])) * (7.5)
     )
     snr <- 3
     group_ids <- rep(c(1,2), n %/% 2)
     rfx_coefs <- matrix(c(-1, -1, 1, 1), nrow=2, byrow=TRUE)
     rfx_basis <- cbind(1, runif(n, -1, 1))
     rfx_term <- rowSums(rfx_coefs[group_ids,] * rfx_basis)
     E_y <- f_XW + rfx_term
     y <- E_y + rnorm(n, 0, 1)*(sd(E_y)/snr)
     test_set_pct <- 0.2
     n_test <- round(test_set_pct*n)
     n_train <- n - n_test
     test_inds <- sort(sample(1:n, n_test, replace = FALSE))
     train_inds <- (1:n)[!((1:n) %in% test_inds)]
     X_test <- X[test_inds,]
     X_train <- X[train_inds,]
     y_test <- y[test_inds]
     y_train <- y[train_inds]
     group_ids_test <- group_ids[test_inds]
     group_ids_train <- group_ids[train_inds]
     rfx_basis_test <- rfx_basis[test_inds,]
     rfx_basis_train <- rfx_basis[train_inds,]
     rfx_term_test <- rfx_term[test_inds]
     rfx_term_train <- rfx_term[train_inds]
     bart_model <- bart(X_train = X_train, y_train = y_train, 
                        group_ids_train = group_ids_train, rfx_basis_train = rfx_basis_train, 
                        X_test = X_test, group_ids_test = group_ids_test, rfx_basis_test = rfx_basis_test, 
                        num_gfr = 100, num_burnin = 0, num_mcmc = 100)
     rfx_samples <- getRandomEffectSamples(bart_model)
     
