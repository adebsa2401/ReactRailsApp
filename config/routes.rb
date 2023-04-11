# frozen_string_literal: true

Rails.application.routes.draw do
  root 'root#index'

  get '/greeting', to: 'root#index'

  get '/message', to: 'message#index'
end
