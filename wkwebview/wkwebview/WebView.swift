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

    var scriptTimer: Timer?
    var curPluginName: String?
    
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
        
//        scriptTimer = Timer.scheduledTimer(withTimeInterval: 1, repeats: true) { timer in
//            if self.curPluginName != nil {
////                self.execScriptFile(fn: "6vdy")
////                self.evaluateJavaScript("window.drakecore.plugins.p" + self.curPluginName! + ".onBodyChildrenNodeChged();") { (result, error) in
//////                    NSLog("exeScriptFile ok")
////                }
//            }
//        }
        
        initJSFile(fn: "wkwebview.bundle")
        
    }
    
    func initJSFile(fn: String) {
        if let path = Bundle.main.path(forResource: fn, ofType: "js", inDirectory: "assets/js") {
            let fm = FileManager()
            let exists = fm.fileExists(atPath: path)
            if(exists){
                let content = fm.contents(atPath: path)
                if let strScript = String(data: content!, encoding: String.Encoding.utf8) {
                    let userScript = WKUserScript(source: strScript, injectionTime: WKUserScriptInjectionTime.atDocumentStart, forMainFrameOnly: true)
                    configuration.userContentController.addUserScript(userScript)
                     //设置ScriptMessageHandler为self
//                    configuration.userContentController.add(TabManager.sharedInstance, name: "APPJS")
                }
            }
        }
    }
    
    func loadUrl(string: String) {
        if let url = URL(string: string) {
            load(URLRequest(url: url))
            
            curPluginName = nil
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
//        execScriptFile(fn: "wkwebview.bundle")
        
        return nil
    }
    
    func webView(_ webView: WKWebView, didStartProvisionalNavigation navigation: WKNavigation!) {
//        execScriptFile(fn: "wkwebview.bundle")
        
        curPluginName = "6vdy"
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
