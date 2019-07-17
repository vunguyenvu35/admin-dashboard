<!doctype html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <meta name="csrf-token" value="{{ csrf_token() }}">
        <link href="{{ mix('css/app.css') }}" rel="stylesheet">
    </head>
  <body>
    <noscript>
      <strong>We're sorry but this app doesn't work properly without JavaScript enabled. Please enable it to continue.</strong>
    </noscript>
    <div id="app">
    </div>
    <!-- built files will be auto injected -->
    <script src="{{ mix('js/app.js') }}"></script>
    <!-- built files will be auto injected -->
  </body>
</html>
