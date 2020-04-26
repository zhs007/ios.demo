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
    
    func execScriptFile(fn: String) {
        if let path = Bundle.main.path(forResource: fn, ofType: "js", inDirectory: "assets/js") {
            let fm = FileManager()
            let exists = fm.fileExists(atPath: path)
            if(exists){
                let content = fm.contents(atPath: path)
                if let strScript = String(data: content!, encoding: String.Encoding.utf8) {
                    
                    evaluateJavaScript(strScript) { (result, error) in
                        NSLog("exeScriptFile ok")
                    }
                }
            }
        }
    }
    
    func webView(_ webView: WKWebView, createWebViewWith configuration: WKWebViewConfiguration, for navigationAction: WKNavigationAction, windowFeatures: WKWindowFeatures) -> WKWebView? {
        self.load(navigationAction.request)
        
        return nil
    }
    
    func webView(_ webView: WKWebView, didStartProvisionalNavigation navigation: WKNavigation!) {
        execScriptFile(fn: "extlib.bundle")
//        UIApplication.shared.isNetworkActivityIndicatorVisible = true
    }
    
    func webView(_ webView: WKWebView, didFail navigation: WKNavigation!, withError error: Error) {
//        UIApplication.shared.isNetworkActivityIndicatorVisible = false
    }
    
    func webView(_ webView: WKWebView, didFinish navigation: WKNavigation!) {
        
//        UIApplication.shared.isNetworkActivityIndicatorVisible = false
    }
    
//    func webView(_ webView: WKWebView, decidePolicyFor navigationAction: WKNavigationAction, decisionHandler: (WKNavigationActionPolicy) -> Void) {
//        
//    }
}
