# StochTree

`stochtree` (short for "stochastic trees") unlocks flexible decision tree modeling in R or Python. 

## Table of Contents

* [Getting Started](getting-started.md): Details on how to install and use `stochtree`
* [About](about.md): Overview of the models supported by stochtree and pointers to further reading
* [R Package](R_docs/index.md): Complete documentation of the R package
* [Python Package](python_docs/index.md): Complete documentation of the Python package
* [C++ Core API and Architecture](cpp_docs/index.md): Overview and documentation of the C++ codebase that supports stochtree
* [Advanced Vignettes](vignettes/index.md): In-depth tutorials on new methods implemented using stochtree
* [Development](development/index.md): Roadmap and how to contribute

## What does the software do?

Boosted decision tree models (like [xgboost](https://xgboost.readthedocs.io/en/stable/), 
[LightGBM](https://lightgbm.readthedocs.io/en/latest/), or 
[scikit-learn's HistGradientBoostingRegressor](https://scikit-learn.org/stable/modules/generated/sklearn.ensemble.HistGradientBoostingRegressor.html)) 
are great, but often require time-consuming hyperparameter tuning. 
`stochtree` can help you avoid this, by running a fast Bayesian analog of gradient boosting (called BART -- Bayesian Additive Regression Trees).

`stochtree` has two primary interfaces:

1. "High-level": robust implementations of many popular stochastic tree algorithms (BART, XBART, BCF, XBCF), with support for serialization and parallelism.
2. "Low-level": access to the "inner loop" of a forest sampler, allowing custom tree algorithm development in <50 lines of code.

The "core" of the software is written in C++, but it provides R and Python APIs. 
The R package is [available on CRAN](https://cran.r-project.org/web/packages/stochtree/index.html) and the python package will soon be on PyPI.

## Why "stochastic" trees?

"Stochastic" loosely means the same thing as "random." This naturally raises the question: how is `stochtree` different from a random forest library?
At a superficial level, both are decision tree ensembles that use randomness in training.

The difference lies in how that "randomness" is deployed. 
Random forests take random subsets of a training dataset, and then run a deterministic decision tree fitting algorithm ([recursive partitioning](https://en.wikipedia.org/wiki/Recursive_partitioning)).
Stochastic tree algorithms use randomness to construct decision tree ensembles from a fixed training dataset.

The original stochastic tree model, [Bayesian Additive Regression Trees (BART)](https://projecteuclid.org/journals/annals-of-applied-statistics/volume-4/issue-1/BART-Bayesian-additive-regression-trees/10.1214/09-AOAS285.full), used [Markov Chain Monte Carlo (MCMC)](https://en.wikipedia.org/wiki/Markov_chain_Monte_Carlo) to sample forests from their posterior distribution. 

So why not call our project `bayesiantree`?

Some algorithms implemented in `stochtree` are "quasi-Bayesian" in that they are inspired by a Bayesian model, but are sampled with fast algorithms that do not provide a valid Bayesian posterior distribution.

Moreover, we think of stochastic forests as general-purpose modeling tools. 
What makes them useful is their strong empirical performance -- especially on small or noisy datasets -- not their adherence to any statistical framework.

So why not just call our project `decisiontree`?

Put simply, the sampling approach is part of what makes BART and other `stochtree` algorithms work so well -- we know because we have tested out versions that did not do stochastic sampling of the tree fits. 

So we settled on the term "stochastic trees", or "stochtree" for short (pronounced "stoke-tree").
