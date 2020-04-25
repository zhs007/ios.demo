//
//  WebView.swift
//  wkwebview
//
//  Created by Zerro Zhao on 2020/4/25.
//  Copyright © 2020 zerrozhao. All rights reserved.
//

import UIKit
import WebKit

class WebView: WKWebView, WKUIDelegate, WKNavigationDelegate {

    /*
    // Only override draw() if you perform custom drawing.
    // An empty implementation adversely affects performance during animation.
    override func draw(_ rect: CGRect) {
        // Drawing code
    }
    */
    
    required init?(coder: NSCoder) {
        super.init(coder: coder)
        
        uiDelegate = self
        navigationDelegate = self
    }
    
    func loadUrl(string: String) {
        if let url = URL(string: string) {
            load(URLRequest(url: url))
        }
    }
    
    func webView(_ webView: WKWebView, createWebViewWith configuration: WKWebViewConfiguration, for navigationAction: WKNavigationAction, windowFeatures: WKWindowFeatures) -> WKWebView? {
        self.load(navigationAction.request)
        
        return nil
    }
    
//    func webView(_ webView: WKWebView, decidePolicyFor navigationAction: WKNavigationAction, decisionHandler: (WKNavigationActionPolicy) -> Void) {
//        
//    }
}
