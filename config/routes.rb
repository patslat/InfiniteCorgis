Infinite::Application.routes.draw do
  root :to => 'root#root'
  resources :corgis
end
