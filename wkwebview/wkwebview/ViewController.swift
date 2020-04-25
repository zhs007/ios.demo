//
//  ViewController.swift
//  wkwebview
//
//  Created by Zerro Zhao on 2020/4/24.
//  Copyright © 2020 zerrozhao. All rights reserved.
//

import UIKit
import WebKit

class ViewController: UIViewController {

    @IBOutlet var webview: WebView!
    
    override func viewDidLoad() {
        super.viewDidLoad()
        
        webview.loadUrl(string: "https://www.6vdy.org/dianshiju/guoju/")
    }


}

